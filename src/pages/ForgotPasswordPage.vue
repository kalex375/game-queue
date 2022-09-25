<template>
    <div>
        <h3>Forgot password</h3>
        <p>
            Please enter your email address. You will receive an email with a
            confirmation code.
        </p>
        <GqInput v-model="email" type="email" />
        <GqButton @click="$router.push({name: 'verification'})"
            >Continue</GqButton
        >
        <router-link :to="{name: 'sign-in'}">Back to sign-in</router-link>
    </div>
</template>

<script setup>
import GqInput from '@/components/UI/GqInput.vue'
import GqButton from '@/components/UI/GqButton.vue'
import {ref} from 'vue'

const email = ref('')
</script>

<style scoped></style>
