<template>
  <div>
    <input
      v-model="checked"
      id="checkbox"
      name="checkbox"
      type="checkbox"
    />
    <label for="checkbox">
      <slot></slot>
    </label>
    
  </div>
</template>

<script setup>
import { defineEmits, defineProps, computed } from "vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});

const emit = defineEmits(["update:modelValue"]);

const checked = computed({
  get() {
    return props.modelValue;
  },
  set(newChecked) {
    emit("update:modelValue", newChecked);
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
input {
  display: none;
}
input ~ label::before input {
  display: none;
}
input ~ label::before {
  content: "✓";
  text-align: center;
  color: #222831;
  line-height: 1em;
  width: 1em;
  height: 1em;
  border: 2px inset white;
  background: #222831;
  border-radius: 0.25em;
  margin: 0.25em;
  display: inline-block;
}
input:checked ~ label::before {
  content: "✓";
  color: white;
  border: 2px inset rgb(255, 255, 255);
  background: #222831;
}
</style>