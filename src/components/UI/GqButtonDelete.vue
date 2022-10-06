<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>
</script>

<style scoped lang="scss">
.btn {
    background-color: #7C0707;
    border-color: #420C0C;

    &:hover {
        background-color: #B30F0F;
        border-color: #A10E0E;
    }
}
</style>