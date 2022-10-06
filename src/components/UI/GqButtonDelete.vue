<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
.btn {
    background-color: #8C0505;
    border-color: #420C0C;
    &:hover {
     background-color: #3464b3;
     border-color: #4285f4;
 }
}
</style>