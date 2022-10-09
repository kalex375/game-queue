<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup></script>

<style scoped lang="scss">
.btn {
    background-color: #7c0707;
    border-color: #420c0c;

    &:hover {
        background-color: #b30f0f;
        border-color: #a10e0e;
    }
}
</style>
