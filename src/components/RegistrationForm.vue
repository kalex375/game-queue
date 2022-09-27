<template>
    <GqPanel>
        <h3>Sign Up</h3>
        <GqInput v-model="username" type="textp" placeholder="Username" />
        <GqInput v-model="email" type="email" placeholder="Email" />
        <GqInput v-model="password" type="password" placeholder="Password" />
        <GqInput
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm password"
        />
        <GqButton>Sign Up</GqButton>
        <p class="m-auto">
            Already have an anccount?
            <router-link class="sign-up" :to="{name: 'sign-in'}"
                >Sign In</router-link
            >
        </p>
    </GqPanel>
</template>

<script setup>
import GqButton from '@/components/UI/GqButton.vue'
import GqInput from '@/components//UI/GqInput.vue'
import GqPanel from '@/components/UI/GqPanel.vue'
import {ref} from 'vue'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
// const isRememberMe = ref(false);
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
h3 {
    font-family: $font_secondary;
    font-size: 40px;
    font-weight: 400;
    color: $color_primary;
    text-transform: uppercase;
    line-height: 1.5em;
    letter-spacing: 0.5px;
}
.flex {
    display: flex;
}
input {
    max-width: 280px;
    width: 100%;
}
.sign-up {
    text-decoration: none;
    color: $color_text;
    &:hover {
        text-decoration: underline;
    }
}
p {
    max-width: 277px;
}
</style>
