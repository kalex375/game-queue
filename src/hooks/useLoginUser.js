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
        if (client.authStore.isValid) {
          return user.email = client.authStore.model.email
        }
    }

    return {
        user,
        authUser,
        checkUser,
    }
}
