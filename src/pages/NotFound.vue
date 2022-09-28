<template>
    <GqContainer>
        <div>
            <h1 class="mt-5">Sorry, this page does not exist</h1>
            <router-link :to="{name: 'sign-in'}"
                ><GqButton>Back to home</GqButton></router-link
            >
        </div>
    </GqContainer>
    <!-- или на dashboard-->
</template>

<script setup>
import GqContainer from '@/components/UI/GqContainer.vue'
import GqButton from '@/components/UI/GqButton.vue'
</script>

<style lang="scss" scoped>
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
