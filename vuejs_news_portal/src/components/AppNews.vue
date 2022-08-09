<template>
  <div class="card">
    <h3>{{ title }} | Новость номер: {{ id }}</h3>
    <app-button @action="open">
      {{ isNewsOpen ? 'Закрыть' : 'Читать' }}
    </app-button>
    <app-button
      color="danger"
      @action="unread"
      v-if="isNewsRead"
    >Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dicta distinctio ipsam iste non numquam odio optio quam, quisquam reiciendis?</p>
      <app-button
        color="primary"
        @action="read"
        v-if="!isNewsRead"
      >Прочесть новость</app-button>

      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton";
import AppNewsList from "@/components/AppNewsList";

export default {
  props: {
    title: {
      type: String, // в поле title ожидается строка (валидация)
      required: true
    },
    id: {
      type: Number, // в поле id ожидается число (так же props поддерживают Proxy, Array, Promise)
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        console.log(value)
        return value === true || value === false
      }
    },
    isRead: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // props: ['title'],
  // emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news': null,
    'unread-news': null
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
      isNewsRead: this.isRead,
    }
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen
      if(this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    read() {
      this.isNewsOpen = false,
      this.isNewsRead = !this.isNewsRead
      if(this.isNewsRead) {
        this.$emit('read-news')
      }
    },
    unread(){
      this.isNewsRead = !this.isNewsRead
      this.$emit('unread-news')
    }
  },
  components: {AppButton, AppNewsList}
};
</script>

<style scoped>

</style>