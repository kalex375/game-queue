<template>
  <GqPanel class="m-auto">
    <h3 class="mb-3">Sign Up</h3>
    <GqInput
      class="mb-3"
      v-model="username"
      type="textp"
      placeholder="Username"
    />
    <GqInput class="mb-3" v-model="email" type="email" placeholder="Email" />
    <GqInput
      class="mb-3"
      v-model="password"
      type="password"
      placeholder="Password"
    />
    <GqInput
      class="mb-3"
      v-model="confirmPassword"
      type="password"
      placeholder="Confirm password"
    />
    <GqButton>Sign Up</GqButton>
  </GqPanel>
</template>

<script setup>
import GqButton from "@/components/UI/GqButton.vue";
import GqInput from "@/components//UI/GqInput.vue";
import GqPanel from "@/components/UI/GqPanel.vue";
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
// const isRememberMe = ref(false);
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
h3 {
  font-family: $font_audiowide;
  font-size: 40px;
  font-weight: 400;
  color: $color_primary;
  text-transform: uppercase;
  line-height: 1.5em;
  letter-spacing: 0.5px;
  margin-top: 12rem;
  @media screen and (max-height: 628px) {
    margin-top: 1rem;
  }
}
.flex {
  display: flex;
}
input {
  max-width: 280px;
  width: 100%;
}
</style>
