<template>
<input type="checkbox" id="checkbox" v-model="checked" />
<label>Remember me</label>
</template>

<script setup>
    import {defineEmits, defineProps, computed} from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])

const checked = computed({
  get () {
    return props.modelValue
  },
  set (newChecked) {
    emit('update:modelValue', newChecked)
  }
})
</script>

<style scoped>

</style>