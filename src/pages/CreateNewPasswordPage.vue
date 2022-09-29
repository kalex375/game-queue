<template>
    <div>
        <h3>Create new password</h3>
        <p>Your new password must be different from previous used passwords.</p>
        <GqInput v-model="newPassword" placeholder="Enter new password" />
        <label>Must be at least 8 characters.</label>
        <GqInput
            v-model="confirmedNewPassword"
            placeholder="Confirm new password"
        />
        <label>Both passwords must match.</label>
        <GqButton>Reset Password</GqButton>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const newPassword = ref('')
const confirmedNewPassword = ref('')
</script>

<style scoped></style>
