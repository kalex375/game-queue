<template>
  <div class="container">
    <LoginForm />
    <p>Or Sign In With</p>
    <GqButton>Google</GqButton>
    <p>
      Don't have an account?<router-link
        class="sign-up"
        :to="{ name: 'sign-up' }"
        >Sign Up</router-link
      >
    </p>
  </div>
</template>

<script setup>
import LoginForm from "@/components/LoginForm";
import GqButton from "@/components/UI/GqButton.vue";
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

/* .container {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
   } */
</style>
