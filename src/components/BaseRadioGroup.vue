<template>
<component
  v-for="option in options"
  :key="option.value"
  :is="vertical ? 'div' : 'span'"
>
  <BaseRadio
    :label="option.label"
    :value="option.value"
    :id="`id_${option.value}`"
    :name="name"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    />
</component>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      required: true
    }
  }
}

</script>
