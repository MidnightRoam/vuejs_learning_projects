<template>
  <app-alert
      v-if="alert"
      title="Работа с Composition"
      type="primary"
      @close="close"
  ></app-alert>
  <div class="card">
    <h1>Переиспользование компонентов</h1>

    <button class="btn primary" @click="toggle">{{ alert ? 'Закрыть' : 'Показать' }} сообщение</button>
    <button class="btn" @click="navigate">Перейти на главную</button>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import AppAlert from "@/components/AppAlert";
import {useAlert} from "@/use/alert";

export default {
  name: "ReusablePage",
  setup() {
    const {alert, close, toggle} = useAlert() // Получение переменных объектом (порядок не важен)
    // const [alert, toggle, close] = useAlert() Получение переменных массивом (порядок важен)

    const router = useRouter()

    const navigate = () => {router.push('/')}

    return {
      navigate,
      ...useAlert()
      // alert,
      // toggle,
      // close
    }
  },
  components: {AppAlert}
}
</script>

<style scoped>

</style>