<template>
  <div v-if="users.length !== 0">
    <div class="card inline" v-for="user in users" :key="user.id">
      <h3>{{ user.firstName }}</h3>
      <buttond class="btn danger" @click="$emit('remove', user.id)">Удалить</buttond>
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
  emits: ['load', 'remove'],
  props: ['users']
}
</script>

<style scoped>
  .inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
