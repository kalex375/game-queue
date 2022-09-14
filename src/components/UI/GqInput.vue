<template>
        <input 
        :value="props.modelValue"
        @input="updateValue($event.target.value)"
        class="input"
        type="text"
        >
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
  modelValue: [String, Number]
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.input {
    padding: 10px 15px;
    border-radius: 50px;
    border: none;
    background: #29144A;
}
</style>