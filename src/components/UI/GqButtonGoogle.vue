<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup></script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.btn {
    background-color: #4285f4;
    border-color: #3464b3;
    padding: 15px 20px;
    &:hover {
        background-color: #3464b3;
        border-color: #4285f4;
    }
}
</style>
