<template>
    <input
        :value="props.modelValue"
        @input="updateValue($event.target.value)"
        class="input"
        type="text"
    />
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
    modelValue: [String, Number],
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
    emit('update:modelValue', value)
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.input {
    font-size: 18px;
    padding: 13px 20px;
    border: 2px solid $border-cl;
    color: $input-text;
    background: $bg-input;
}
</style>
