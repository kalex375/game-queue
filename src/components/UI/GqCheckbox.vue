<template>
    <label for="checkbox" class="control control--checkbox">
        <input
            v-model="checked"
            id="checkbox"
            name="checkbox"
            type="checkbox"
        />
        <slot></slot>
        <div class="control__indicator"></div>
    </label>
</template>

<script setup>
import {defineEmits, defineProps, computed} from 'vue'
const props = defineProps({
    modelValue: {
        type: Boolean,
    },
})

const emit = defineEmits(['update:modelValue'])

const checked = computed({
    get() {
        return props.modelValue
    },
    set(newChecked) {
        emit('update:modelValue', newChecked)
    },
})
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.control {
    display: block;
    position: relative;
    padding-left: 1.875rem;
    cursor: pointer;
}
.control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.control__indicator {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 0;
    height: 20px;
    width: 20px;
    background: #e6e6e6;
}
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
    background: #ccc;
}
.control input:checked ~ .control__indicator {
    background: $color_accent;
}
.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
    background: $color_accent;
}
.control input:disabled ~ .control__indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control__indicator:after {
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control__indicator:after {
    display: block;
}
.control--checkbox .control__indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
</style>
