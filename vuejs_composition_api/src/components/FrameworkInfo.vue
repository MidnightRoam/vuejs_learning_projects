<template>
  <div class="card">
    <p>Название: <strong>{{ name }}</strong></p>
    <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

    <button class="btn warning" @click="changeToThree">Изменить на 3 версию</button>
  </div>
</template>

<script>
import {computed, inject} from "vue";
export default {
  name: "FrameworkInfo",
  emits: ['change-version'],
  setup(props, context) {

    function change() {
      context.emit('change-version', 3)
    }

    const version = inject('version') // получаем из provide в App

    return {
      name: inject('name'),
      version: version,
      changeToThree: change,
      doubleVersion: computed(() => version.value * 2)
    }
  }
}
</script>

<style scoped>

</style>