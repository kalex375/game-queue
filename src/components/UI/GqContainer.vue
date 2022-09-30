<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
div {
    max-width: 1120px;
    margin: 0 auto;
    @media screen and (max-width: 1366px) {
        max-width: 980px;
    }
    @media screen and (max-width: 768px) {
        max-width: 600px;
    }
}
</style>
