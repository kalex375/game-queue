<template>
    <div>
        <RegistrationForm></RegistrationForm>
        <p>Already have an anccount? <a @click="$router.push('/')">Sign In</a></p>
    </div>
</template>

<script setup>
import RegistrationForm from '@/components/RegistrationForm.vue';

</script>

<style scoped>

</style>