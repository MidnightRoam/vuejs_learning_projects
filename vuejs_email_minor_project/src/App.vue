<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'

export default {
  data() {
    return {
      isAuth: true
    }
  },
  methods: {
    login() {
      this.isAuth = true
      if (this.$route.query.page) {
        this.$router.push(this.$route.query.page) // если мы сделали логаут с какой-то страницы, то при логине мы открываем её же
      } else {
        this.$router.push('/dashboard') // если нет, то при логине открываем главную страницу
      }

    },
    logout() {
      this.isAuth = false
      this.$router.push({
        path: '/login',
        query: { // сохраняем данные прошлой страницы при логауте
          page: this.$route.path
        }
      })
    }
  },
  components: {TheNavbar},
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        {id: 1, theme: 'Купил себе PlayStation 5'},
        {id: 2, theme: 'Выучил Vue Router'},
        {id: 3, theme: 'Хочу изучить весь Vue'},
        {id: 4, theme: 'А следующий блок про Vuex!'},
        {id: 5, theme: 'А что там на счет Vue Hooks?'}
      ]
    }
  }
}
</script>

<style>
</style>
