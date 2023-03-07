<template>
<input
  type="radio"
  :checked="modelValue === value"
  :value="value"
  @change="$emit('update:modelValue', value)"
  v-bind="$attrs"
  :id="id"
/>
<label :for="id" v-if="label">{{label}}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    value: {
      type: [String, Number],
      required: true
    },
    id: {
      type: String,
      default: ''
    }
  }
}

</script>
