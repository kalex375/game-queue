<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped lang="scss">
.btn {
  padding: 10px 15px;
  background: #ec44f7;
  color: #eeeeee;
  border: none;
}
</style>