<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости на: {{ now }}</h2>
      <span>
        Открыто: <strong>{{ openRate }}</strong> |
        Прочитано: <strong>{{ readRate }}</strong>
      </span>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      @open-news="openNews"
      @read-news="readNews"
      @unread-news="unreadNews"
    ></app-news>

  </div>
</template>

<script>
import AppNews from "@/components/AppNews";

export default {
  data: function() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: "У Python появился мощный фреймворк Django",
          id: 1,
          isOpen: false,
          isRead: false
        },
        {
          title: "Vue 3 пользуется успехом у разработчиков",
          id: 2,
          isOpen: false,
          isRead: false
        },
        {
          title: "Как научиться программировать? Эксперт объясняет",
          id: 3,
          isOpen: false,
          isRead: false
        }
      ]
    }
  },
  provide() {
    return {
      title: 'Список всех новостей',
      news: this.news
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews() {
      this.readRate++
    },
    unreadNews() {
      this.readRate--
    }
  },
  computed: {},
  components: {
    'app-news': AppNews
  },
};
</script>

<style scoped>
h2 {
  color: darkred;
}
#app {

}
</style>
