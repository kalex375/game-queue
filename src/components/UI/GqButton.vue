<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped lang="scss">
.btn {
  padding: 10px 15px;
  background: #29144a;
  border-radius: 50px;
  color: #ffffff;
}
</style>