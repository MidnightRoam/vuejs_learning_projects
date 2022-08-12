<template>
  <div v-if="users.length != 0">
    <div class="card" v-for="user in users" :key="user">
      <h3>{{ user }}</h3>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>Пользователей пока нет</h4>
    <button class="btn" @click="$emit('load')">Загрузить список</button>
  </div>
</template>

<script>
export default {
  name: "AppUsersList",
  emits: ['load'],
  props: ['users']
}
</script>

<style scoped>

</style>
