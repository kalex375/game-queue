<template>
  <form>
    <h3 class="title-form">Sign in</h3>
    <GqInput v-model="usernameOrEmail" type="email" placeholder="Email" />
    <GqInput v-model="password" type="password" placeholder="Password" />
    <div class="login__group">
      <div>
        <GqCheckbox v-model="isRememberMe" />
        <label>Remember me</label>
      </div>
      <router-link class="forgot-password" :to="{ name: 'forgot-password' }"
        >Forgot password?</router-link
      >
    </div>
    <GqButton>Sign In</GqButton>
  </form>
</template>

<script setup>
import GqInput from "./UI/GqInput.vue";
import GqButton from "./UI/GqButton.vue";
import GqCheckbox from "./UI/GqCheckbox.vue";

import { ref } from "vue";

const usernameOrEmail = ref("");
const password = ref("");
const isRememberMe = ref(false);
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.title-form {
  font-family: $font_audiowide;
  font-size: 40px;
  font-weight: 400;
  color: $color_primary;
  text-transform: uppercase;
  line-height: 1.5em;
  letter-spacing: 0.5px;
}
.forgot-password {
  text-decoration: none;
  color: $color_text;
  font-size:16px ;
  &:hover {
    text-decoration: underline;
  }
}


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