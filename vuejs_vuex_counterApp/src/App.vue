<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ uppercaseTitle }}</h1>
      <h2>Счетчик {{ counter }} | Двойное значение: {{ doubleCounter }}</h2>
      <button class="btn" @click="counterPlus">Прибавить 1</button>
      <button class="btn primary" @click="counterPlusAsync({ value: 10, delay: 200 })">Прибавить 10</button>
      <button class="btn warning" @click="counterMinus" v-if="counter > 0">Убавить 1</button>
    </div>
    <div class="card" v-if="counter > 0">
      <button class="btn danger" @click="counterNull">Очистить</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
import {mapGetters, mapMutations, mapActions} from "vuex";

export default {
  // computed: mapGetters(['counter', 'doubleCounter', 'uppercaseTitle']),
  computed: {
    ...mapGetters(['uppercaseTitle']), // Получение общих геттеров
    ...mapGetters('count', ['counter', 'doubleCounter']) // Получение геттеров, относящихся к count
  },
  methods: {
    ...mapMutations({
      counterPlus: "count/counterIncrement",
      counterMinus: "count/counterDecrement",
      counterNull: "count/counterNull",
    }),
    ...mapActions('count', ['counterPlusAsync']), // 'count' - это namespace модуля, при установке "namespaced: true"
    // counterPlusAsync() {
    //   this.$store.dispatch('counterPlusAsync', {
    //     value: 10,
    //     delay: 200
    //   })
    // }
  },
  components: {TheNavbar}
}
</script>
