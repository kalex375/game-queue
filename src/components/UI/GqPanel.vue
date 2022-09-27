<template>
    <div class="m-auto">
        <slot> </slot>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';
div {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    gap: 1rem;
}
</style>
