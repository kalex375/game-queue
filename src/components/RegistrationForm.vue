<template>
    <form @submit.prevent="signUp">
        <GqPanel>
            <h3>Sign Up</h3>
            <GqInput v-model="username" type="text" placeholder="Username" />
            <GqInput v-model="email" type="email" placeholder="Email" />
            <GqInput
                v-model="password"
                type="password"
                placeholder="Password"
            />
            <GqInput
                v-model="confirmPassword"
                type="password"
                placeholder="Confirm password"
            />
            <GqButton type="submit" @submit="signUp">Sign Up</GqButton>

            <p class="m-auto">
                Already have an anccount?
                <router-link class="sign-up" :to="{name: 'sign-in'}"
                    >Sign In</router-link
                >
            </p>
        </GqPanel>
    </form>
</template>

<script setup>
import {ref} from 'vue'
import useLoginUser from '@/hooks/useLoginUser'
import router from '@/router/router'

const {createUser} = useLoginUser()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

async function signUp() {
    const isAuth = await createUser(
        password.value,
        email.value,
        confirmPassword.value,
        username.value
    )

    if (isAuth) {
        router.push({name: 'dashboard'})
    } else {
        router.push({name: 'sign-up'})
    }
}

// const isRememberMe = ref(false);
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
h3 {
    font-family: $font_secondary;
    font-size: 40px;
    font-weight: 400;
    color: $color_primary;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
}
.flex {
    display: flex;
}
input {
    max-width: 280px;
    width: 100%;
}
.sign-up {
    text-decoration: none;
    color: $color_text;
    &:hover {
        text-decoration: underline;
    }
}
p {
    max-width: 277px;
}
</style>
