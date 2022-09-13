<template>
    <div>
        <h3>Forgot password</h3>
        <p>Please enter your username or email address. 
            You will receive an email with a confirmation code.
            </p>
        <GqInput/>
        <GqButton>Continue</GqButton>
        <a @click="$router.push('/')">Back to sign-in</a>
    </div>
</template>

<script setup>
import GqInput from '@/components/UI/GqInput.vue';
import GqButton from '@/components/UI/GqButton.vue';
   
</script>

<style scoped>

</style>