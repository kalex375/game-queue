<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <nav class="nav">
            <GqButton @click="$router.push({name: 'add-game'})"
                >Add game
            </GqButton>
        </nav>
        <GqGameList />
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import GqContainer from '@/components/UI/GqContainer.vue'
import GqGameList from '@/pages/GqGameList'
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
select {
    padding: 15px 20px;
    background: #49586a;
    border-radius: 10px;
    border: none;
    font-size: 17px;
    color: #eeeeee;
    font-family: 'Nunito Sans';
    &:hover {
        transition: 200ms;
        opacity: 0.9;
    }
}
.nav {
    margin-top: 5rem;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    background: $color_bg;
}
</style>
