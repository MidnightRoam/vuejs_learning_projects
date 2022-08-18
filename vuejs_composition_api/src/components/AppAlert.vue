<template>
  <div class="alert" :class="type" @click="$emit('close')">
    <p class="alert-title">{{ title }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, sapiente?</p>
  </div>
</template>

<script>
export default {
  name: "AppAlert",
  emits: ['close'],
  props: ['title', 'type']
}
</script>

<style scoped>

</style>