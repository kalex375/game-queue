<template>
  <div class="checkbox">
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="">Remeber me</label>
  </div>
  <!-- не нужный код ↑↑↑ (если я удаляю то вылетает ошибки не знаю как их решать)  -->
  <div>
    <input
      id="highload0"
      class="checkbox-custom"
      name="highload0"
      type="checkbox"
    />
    <label for="highload0" class="checkbox-custom-label">Remeber me</label>
  </div>
  <div>sdasdasasdasdassdada ad</div>
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
#highload0 {
  display: none;
}
#highload0 ~ label::before #highload0 {
  display: none;
}
#highload0 ~ label::before {
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
#highload0:checked ~ label::before {
  content: "✓";
  color: white;
  border: 2px inset rgb(255, 255, 255);
  background: #222831;
}
</style>
