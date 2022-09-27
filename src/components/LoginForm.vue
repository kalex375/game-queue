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
            <div class="login__group">
                <div class="flex">
                    <GqCheckbox v-model="isRememberMe" />
                    <label>Remember me</label>
                </div>
                <router-link
                    class="forgot-password"
                    :to="{name: 'forgot-password'}"
                    >Forgot password?</router-link
                >
            </div>
            <!-- <p :v-text="message">{{ message }}</p> -->
            <GqButton class="btn-padding" type="submit" @submit="signIn"
                >Sign In</GqButton
            >
            <p>- or -</p>
            <div class="login">
                <GqButton class="btn-bg btn-padding"
                    >SIGN IN WITH GOOGLE</GqButton
                >
                <p>
                    Don't have an account?<router-link
                        class="sign-up pl-1"
                        :to="{name: 'sign-up'}"
                        >Sign Up</router-link
                    >
                </p>
            </div>
        </GqPanel>
    </form>
</template>

<script setup>
import GqInput from './UI/GqInput.vue'
import GqButton from './UI/GqButton.vue'
import GqCheckbox from './UI/GqCheckbox.vue'
import GqPanel from '@/components/UI/GqPanel.vue'
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
.login {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.btn-padding {
    padding: 15px 20px;
}
.btn-bg {
    background-color: #4285f4;
    border-color: #3464b3;
    &:hover {
        background-color: #3464b3;
        border-color: #4285f4;
    }
}
.flex {
    display: flex;
    font-size: 15px;
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
.login__group {
    display: flex;
    align-items: center;
    gap: 2rem;
}
</style>
