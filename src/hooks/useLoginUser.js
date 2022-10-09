import Pocketbase from 'pocketbase'
import {reactive} from 'vue'

const client = new Pocketbase('http://game-queue.com:8888')
const user = reactive({
    token: '',
    email: '',
})

export default function useLoginUser() {
    async function authUser(email, password) {
        try {
            const userAuthData1 = await client.users.authViaEmail(
                email.value,
                password.value
            )
            user.token = userAuthData1.token
            user.email = userAuthData1.user.email
            return true
        } catch (e) {
            return false
        }
    }
    function checkUser() {
        if (!client.authStore.isValid) return false
        if (user.email === '') user.email = client.authStore.model.email
        return true
    }
    function logout() {
        client.authStore.clear()
        user.email = ''
    }
    async function createUser(password, email, confirmPassword, username) {
       try {
           if (password !== confirmPassword) return false
          await client.users.create({
               email: email,
               password: password,
               passwordConfirm: confirmPassword,
                name: username
           });
           return true
       } catch(e) {
            return false
       }
    }
    return {
        user,
        authUser,
        checkUser,
        logout,
        createUser,

    }
}
