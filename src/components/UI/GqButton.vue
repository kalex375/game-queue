<template>
  <button class="btn transition">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
.transition {
  transition: 200ms;
}
.btn {
  font-family: "Nunito Sans", Sans-serif;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  font-style: normal;
  line-height: 25px;
  letter-spacing: 0.8px;
  padding: 15px 50px;
  background: $bg-button;
  color: #eeeeee;
  border: none;
  margin-bottom: 5px;
  border-bottom: $border-cl-btn solid 5px;
  &:hover {
    background: $border-cl-btn;
    border-color: $bg-button;
  }
}
</style>