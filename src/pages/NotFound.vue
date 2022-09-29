<template>
    <GqContainer>
        <div>
            <h1 class="mt-5">Sorry, this page does not exist</h1>
            <router-link class="btn" :to="{name: 'sign-in'}"
                >Back to home</router-link
            >
        </div>
    </GqContainer>
    <!-- или на dashboard-->
</template>

<script setup>
import GqContainer from '@/components/UI/GqContainer.vue'
</script>

<style lang="scss" scoped>
.btn {
    text-decoration: none;
}
h1 {
    text-align: center;
}
div {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
}
</style>
