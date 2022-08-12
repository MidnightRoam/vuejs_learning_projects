<template>
  <div class="form-control" :class="{invalid: error}">
    <label :for="id">{{  label  }}</label>
    <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="change"
    >
    <small v-if="error">{{ error }}</small>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  name: "AppInput",
  props: {
    modelValue: String,
    error: String,
    placeholder: String,
    label: String,
  },
  methods: {
    change(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
  data() {
  return {
    id: 'input-' + Math.random()
  }}
}
</script>

<style scoped>

</style>