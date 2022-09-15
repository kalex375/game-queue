<template>
    <div>
        <RegistrationForm></RegistrationForm>
        <p>Already have an anccount? <router-link :to="{ name: 'sign-in' }">Sign In</router-link></p>
    </div>
</template>

<script setup>
import RegistrationForm from '@/components/RegistrationForm.vue';

</script>

<style scoped>

</style>