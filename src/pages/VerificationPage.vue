<template>
    <div>
        <h3>Verification</h3>
        <p>Enter the code you received by email to confirm the password reset.</p>
        <div>
            <GqInput
            v-model="firstNumber"
            />
            <GqInput
            v-model="secondNumber"
            />
            <GqInput
            v-model="thirdNumber"
            />
            <GqInput
            v-model="fourthNumber"
            />
        </div>
        <p>If you didn't recelve a code!<span style="color: red;">Resend</span></p>
        <GqButton>Verify</GqButton>
        <router-link :to="{name: 'forgot-password'}">Back to forgot password</router-link>
    </div>
</template>

<script setup>
import GqInput from '@/components/UI/GqInput.vue';
import GqButton from '@/components/UI/GqButton.vue';
import {ref} from 'vue';

const firstNumber = ref('')
const secondNumber = ref('')
const thirdNumber = ref('')
const fourthNumber = ref('')

</script>

<style scoped>

</style>