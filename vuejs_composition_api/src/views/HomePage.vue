<template>
  <div class="card">
    <h1>Vue Composition Api</h1>
    <small>Заменяет: data, methods, computed, watch</small>
    <div class="form-control">
      <!--        <input type="text" ref="textInput" placeholder="Введите название">-->
      <input type="text" v-model="firstName">
    </div>

    <button class="btn" @click="change">Изменить</button>
  </div>

  <framework-info
      @change-version="changeVersion"
      class="test-from-app"
  >
    <template #footer>
      <p>This is footer</p>
    </template>
  </framework-info>
</template>

<script>
import FrameworkInfo from "@/components/FrameworkInfo";
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, provide, reactive, ref} from "vue";
import AppAlert from "@/components/AppAlert";
import {router} from "@/router";


export default {
  components: { FrameworkInfo },
  setup() {
    const name = ref('VueJS')
    const version = ref(3)
    const textInput = ref(null)
    const firstName = ref('')


    const navigate = () => {router.push('/')}


    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    console.log('created')

    onBeforeMount(() => {
      console.log('onBeforeMount')
    })

    onMounted(() => {
      console.log('onMounted')
    })

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })

    onUpdated(() => {
      console.log('onUpdated')
    })

    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new version:', newValues[0])
    //   console.log('new name:', newValues[1])
    //   console.log('old version:', oldValues[1])
    //   console.log('old name:', oldValues[0])
    // })

    function changeInfo() {
      name.value = 'VueJS!'
      version.value = 2
      // framework.name = 'VueJS!'
      // framework.version = 2
    }

    function changeVersion(number) {
      version.value = number
    }

    provide('name', name) // отправляет в inject в FrameworkInfo
    provide('version', version)

    return {
      change: changeInfo,
      // doubleVersion,
      textInput,
      firstName,
      changeVersion,
    }
  },
}

</script>

<style scoped>

</style>