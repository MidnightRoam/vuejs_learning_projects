<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-users-list
        v-else
        :users="users"
        @load="loadUsers"
        @remove="removeUser"
    ></app-users-list>
  </div>
</template>

<script>
import AppUsersList from "@/components/AppUsersList";
import AppAlert from "@/components/AppAlert";
import AppLoader from "@/components/AppLoader";
import axios from 'axios'

export default {
  data() {
    return {
      name: '',
      users: [],
      alert: null,
      loading: false
    }
  },
  mounted() {
    this.loadUsers()
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

      this.users.push({
        firstName: this.name,
        id: firebaseData.name
      })
      this.name = ''
    },
    async loadUsers() {
      try {
        this.loading = true
        const {data} = await axios.get('https://vuejs-with-http-learn-default-rtdb.europe-west1.firebasedatabase.app/users.json')
        if (!data) {
          throw new Error('Список людей пуст')
        }
        this.users = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key] // или firstName: data[key].firstName
          }
        })
        this.loading = false
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: e.message
        }
        this.loading = false
        console.log(e.message)
      }
    },
    async removeUser(id) {
      try {
        const user = this.users.find(person => person.id === id).firstName
        await axios.delete(`https://vuejs-with-http-learn-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`)
        this.users = this.users.filter(user => user.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно',
          text: `Пользователь "${user}" был удален`
        }
      } catch (e) {
        this.alert = {
          type: 'danger',
          title: 'Ошибка!',
          text: `Пользователь не был удален`
        }
      }

    }
  },
  components: { AppUsersList, AppAlert, AppLoader }
}
</script>

<style>

</style>
