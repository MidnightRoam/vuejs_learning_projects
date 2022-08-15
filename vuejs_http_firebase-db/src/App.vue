<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>
    <app-users-list
        :users="users"
        @load="loadUsers"
    ></app-users-list>
  </div>
</template>

<script>
import AppUsersList from "@/components/AppUsersList";
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      users: []
    }
  },
  methods: {
    async createPerson() {
       const response = await fetch('https://vuejs-with-http-learn-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      }) // отправляем данные на сервер. Fetch возвращает промис.

      const firebaseData = await response.json() // ждем получения данных от сервера

      console.log(firebaseData)
      this.name = ''
    },
    async loadUsers() {
      const {data}= await axios.get('https://vuejs-with-http-learn-default-rtdb.europe-west1.firebasedatabase.app/users.json')
      this.users = Object.keys(data).map(key => {
        return {
          id: key,
          ...data[key] // или firstName: data[key].firstName
        }
      })
    }
  },
  components: { AppUsersList }
}
</script>

<style>

</style>
