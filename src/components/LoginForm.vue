<template>
    <form @submit.prevent>
        <h3 class="title-form">Sign in</h3>
        <GqInput
        v-model="email"
        type="email"
        placeholder="Email"
        />
        <GqInput
        v-model="password"
        type="password"
        placeholder="Password"
        />
        <div class="login__group">
            <div>
            <GqCheckbox
            v-model="isRememberMe"
            />
            <label>Remember me</label>
            </div>
            <router-link :to="{name: 'forgot-password' }">Forgot password?</router-link>
        </div>
        <GqButton @click="useLoginUser(email, password)">Sign In</GqButton>
    </form>
</template>

<script setup>
import GqInput from './UI/GqInput.vue';
import GqButton from './UI/GqButton.vue';
import GqCheckbox from './UI/GqCheckbox.vue';
import {ref} from 'vue';
import { useLoginUser } from '@/hooks/useLoginUser';

const email = ref('')
const password = ref('')
const isRememberMe = ref(false)
</script>

<style scoped>

/* form {
    display: flex;
    flex-direction: column;
}
.title-form {
   text-align: center;
}
.login__group {
    display: flex;
    justify-content: space-between;
} */
</style>