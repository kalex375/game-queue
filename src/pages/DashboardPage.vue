<template>
    <GqHeader></GqHeader>
    <GqContainer class="m-auto">
        <GqGameList/>
    </GqContainer>
</template>

<script setup>
import GqHeader from '@/components/UI/GqHeader.vue'
import GqContainer from '@/components/UI/GqContainer.vue'
import GqGameList from "@/pages/GqGameList";


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
</style>
