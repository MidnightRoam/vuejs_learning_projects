<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>

      <app-input
        placeholder="Введите имя"
        :error="errors.name"
        label="Как вас зовут?"
        v-model="name"
      >
      </app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
            type="number"
            id="age"
            max="70"
            v-model.number="age"
        >
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="nsk">Новосибирск</option>
          <option value="kzn">Казань</option>
          <option value="msk">Москва</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="yes" /> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" v-model="relocate" name="trip" value="no" /> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="technologies" name="technologies" value="vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="technologies" name="technologies" value="cli"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="technologies" name="technologies" value="router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила нашей компании</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree" name="agree" />С правилами ознакомлен и согласен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
  import AppInput from "@/components/AppInput";
  export default {
    data() {
      return {
        name: '',
        age: 21,
        city: 'msk',
        relocate: null,
        technologies: [],
        agree: null,
        errors: {
          name: null
        }
      }
    },
    methods: {
      formIsValid() {
        let isValid = true
        if (this.name.length === 0 ) {
          this.errors.name = 'Invalid name'
          isValid = false
        } else {
          this.errors.name = null
        }
        return isValid
      },
      submitHandler() {
        if (this.formIsValid()) {
          console.group('Form Data')
          console.log('Name:', this.name)
          console.log('Age:', this.age)
          console.log('City:', this.city)
          console.log('Relocate:', this.relocate)
          console.log('Skills:', this.technologies)
          console.log('Rules:', this.agree)
          console.groupEnd()
        }
      }
    },
    components: {
      AppInput
    }
  }
</script>

<style>
  .form-control small {
    color: #e53935;
  }

  .form-control.invalid input {
    border-color: #e53935;
  }
</style>
