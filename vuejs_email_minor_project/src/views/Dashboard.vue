<template>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>Тут ты можешь перейти на любую страницу и почитать заранее заготовленные письма :)</p>

    <router-link to="/mail">Почта</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter() {
    console.log('beforeRouteEnter')
  },
  beforeRouteLeave(to, from, next) {
    const answer = confirm('Вы уверены, что хотите перейти на страницу почты?')
    if (answer) {
      next()
    } else {
      next(false)
    }
  }
}
</script>

<style scoped>

</style>