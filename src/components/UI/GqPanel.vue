<template>
  <div>
    <slot> </slot>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
div {
  max-width: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>