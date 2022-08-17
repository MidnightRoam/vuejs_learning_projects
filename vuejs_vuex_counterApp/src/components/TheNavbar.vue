<template>
  <header class="navbar">
    Vuex
    <div>
      <strong>Счетчик {{ counter }}&nbsp;</strong>
      <button class="btn primary" @click="add">Добавить 5</button>
    </div>

  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

  export default {
  computed: {
    // counter() {
    //   return this.$store.getters['count/counter']
    // },
    ...mapGetters('count', ['counter']) // строчка, повторяющий функционал закомментированного кода вверху
  },
  methods: {
    ...mapMutations({
      addFive: 'count/add'
    }),
    add() {
      this.addFive(5)
      // this.add({value: 5})
      // this.$store.commit('add', 5, 1500)
    }
  }
}
</script>
