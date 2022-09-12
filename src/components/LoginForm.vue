<template>
    <form @submit.prevent>
        <h3 class="title-form">Sign in</h3>
        <GqInput
        v-model="usernameOrEmail"
        type="text"
        placeholder="Username or email"
        />
        <GqInput
        v-model="password"
        type="password"
        placeholder="Password"
        />
        <div class="lpgin__group">
            <GqCheckbox
            v-model="isRememberMe"
            >
            </GqCheckbox>
        </div>
        <GqButton>Sign In</GqButton>
    </form>
</template>

<script setup>
import GqInput from './UI/GqInput.vue';
import GqButton from './UI/GqButton.vue';
import GqCheckbox from './UI/GqCheckbox.vue';
import {ref} from 'vue';

const usernameOrEmail = ref('')
const password = ref('')
const isRememberMe = ref(false)
    // export default {
    // data() {
    //     return {
    //         user: {
    //             usernameOrEmail: "",
    //             password: ""
    //         },
    //         checked: "false"
    //     };
    // },
    // methods: {},
    // components: { GqInput, GqButton }
//}
</script>

<style scoped>
form {
    padding: 25px;
    display: flex;
    flex-direction: column;
   /* color: white; */
    margin: 0 auto;
    align-items: center;
}
.title-form {
    text-align: center;
    color: #FFFF;
}
</style>