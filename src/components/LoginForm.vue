<template>
    <form @submit.prevent>
        <h3 class='title-form'>Sign in</h3>
        <GqInput
        v-model="email"
        type='email'
        placeholder='Email'
        />
        <GqInput
        v-model="password"
        type='password'
        placeholder='Password'
        />
        <div class='login__group'>
            <div>
                <GqCheckbox
                v-model="isRememberMe"
                />
                <label>Remember me</label>
            </div>
            <router-link :to="{name: 'forgot-password' }">Forgot password?</router-link>
        </div>
        <p :v-text="message">{{ message }}</p>
        <GqButton @click="signIn">Sign In</GqButton>
    </form>
</template>

<script setup>
import GqInput from './UI/GqInput.vue';
import GqButton from './UI/GqButton.vue';
import GqCheckbox from './UI/GqCheckbox.vue';
import useLoginUser from '@/hooks/useLoginUser'
import router from '@/router/router'
import {ref} from 'vue';

const email = ref('')
const password = ref('')
const isRememberMe = ref(false)
const message = ref('')

const { user, authUser  } = useLoginUser()

async function signIn() {
    const isAuth = await authUser(email, password)
    if (isAuth) {
        router.push({name: 'dashboard'})
    } else {
        message.value = 'The user is not registered in the system.'
        router.push({name: 'sign-in'})
    } 
    localStorage.setItem('TOKEN_USER', user.token)
} 
   

</script>

<style scoped>

</style>