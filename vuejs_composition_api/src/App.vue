<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <smaill>data, methods, computed, watch</smaill>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} ({{ doubleVersion }})</strong></p>

      <div class="form-control">
        <input type="text" ref="textInput" placeholder="Введите название">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, isRef, isReactive, computed, watch} from 'vue';
/* reactive делает тоже самое, что и ref, но только с объектами, а toRefs приводит к рефам объекты.
* isRef и isReactive возвращает true или false для проверки, является ли переменная рефом или реактивом */

export default {
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)

    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    const doubleVersion = computed(() => {
      return version.value * 2
    })

    watch([doubleVersion, name], (newValues, oldValues) => {
      console.log('new version:', newValues[0])
      console.log('new name:', newValues[1])
      console.log('old version:', oldValues[1])
      console.log('old name:', oldValues[0])
    })

    function changeInfo() {
      name.value = textInput.value.value
      version.value = 2
      // framework.name = 'VueJS!'
      // framework.version = 2
    }

    return {
      name: name,
      version: version,
      change: changeInfo,
      doubleVersion,
      textInput
    }
  },
}
</script>