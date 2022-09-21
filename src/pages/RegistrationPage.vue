<template>
    <div>
        <RegistrationForm></RegistrationForm>
        <p>Already have an anccount? <router-link class="sign-up" :to="{ name: 'sign-in' }">Sign In</router-link></p>
    </div>
</template>

<script setup>
import RegistrationForm from '@/components/RegistrationForm.vue';

</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.sign-up {
  text-decoration: none;
  color: $color_text;
  &:hover {
    text-decoration: underline;
  }
}
</style>