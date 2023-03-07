<template>
  <label v-if="label">{{label}} {{ modelValue }}</label>
      <select
        :value="modelValue"
        class="field"
        v-bind="{
          ...$attrs,
          onChange: ($event) => {$emit('update:modelValue', $event.target.value)}
        }"
      >
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"
          :selected="option.value === modelValue"
          :disabled="option.value === 0 ? true : false"
        >{{ option.label }}</option>
      </select>
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
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
