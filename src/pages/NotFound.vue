<template>
    <GqContainer>
        <h1 class="mt-5">Sorry, this page does not exist</h1>
        <router-link class="btn" :to="{name: 'sign-in'}"
            >Back to home</router-link
        >
    </GqContainer>
    <!-- или на dashboard-->
</template>

<script setup></script>

<style lang="scss" scoped>
div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}
</style>
