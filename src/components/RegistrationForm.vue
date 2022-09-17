<template>
    <form>
        <h3>Sign Up</h3>
        <GqInput
        v-model="username"
        type="text"
        placeholder="Username"
        />
        <GqInput
        v-model="email"
        type="email"
        placeholder="Email"
        />
        <GqInput
        v-model="password"
        type="password"
        placeholder="Password"
        />
        <GqInput
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm password"
        /> 
        <div>
        <GqCheckbox
         v-model="isRememberMe"
         />
        <label>Remember me</label>
        </div>
        <GqButton>Sign Up</GqButton>
    </form>
</template>

<script setup>
import GqButton from '@/components/UI/GqButton.vue';
import GqInput from '@/components//UI/GqInput.vue';
import GqCheckbox from '@/components//UI/GqCheckbox.vue';
import {ref} from 'vue';

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isRememberMe = ref(false)
</script>

<style scoped>

</style>