<template>
    <form @submit.prevent="signIn">
        <GqPanel>
            <h3 class="title-form">Sign in</h3>
            <GqInput v-model="email" type="email" placeholder="Email" />
            <GqInput
                v-model="password"
                type="password"
                placeholder="Password"
            />
            <div class="login">
                <GqCheckbox v-model="isRememberMe">Remember me</GqCheckbox>
                <router-link
                    class="forgot-password"
                    :to="{name: 'forgot-password'}"
                    >Forgot password?</router-link
                >
            </div>
            <p v-if="message" v-text="message"></p>
            <GqButton type="submit" @submit="signIn">Sign In</GqButton>
            <p>- or -</p>

            <GqButtonGoogle>SIGN IN WITH GOOGLE</GqButtonGoogle>
            <p>
                Don't have an account?<router-link
                    class="sign-up pl-1"
                    :to="{name: 'sign-up'}"
                    >Sign Up</router-link
                >
            </p>
        </GqPanel>
    </form>
</template>

<script setup>
import GqInput from './UI/GqInput.vue'
import GqButton from './UI/GqButton.vue'
import GqCheckbox from './UI/GqCheckbox.vue'
import GqPanel from '@/components/UI/GqPanel.vue'
import GqButtonGoogle from '@/components/UI/GqButtonGoogle.vue'
import useLoginUser from '@/hooks/useLoginUser'
import router from '@/router/router'
import {ref} from 'vue'

const email = ref('')
const password = ref('')
const isRememberMe = ref(false)
const message = ref('')

const {authUser} = useLoginUser()

async function signIn() {
    const isAuth = await authUser(email, password)

    if (isAuth) {
        router.push({name: 'dashboard'})
    } else {
        message.value = 'Incorrect login or password.'
        router.push({name: 'sign-in'})
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
.input {
    width: 100%;
}
.sign-up {
    text-decoration: none;
    color: $color_text;
    &:hover {
        text-decoration: underline;
    }
}
.title-form {
    font-family: $font_secondary;
    font-size: 40px;
    font-weight: 400;
    color: $color_primary;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
}
.forgot-password {
    text-decoration: none;
    color: $color_text;
    font-size: 16px;
    &:hover {
        text-decoration: underline;
    }
}
.login {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
}
</style>
