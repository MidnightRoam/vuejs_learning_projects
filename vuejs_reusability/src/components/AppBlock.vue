<template>
  <div class="container">
    <app-alert
        v-if="alert"
        text="Это очень важное сообщение"
        title="Внимание!"
        type="primary"
        @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{alert ? 'Скрыть' : 'Показать'}} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from "@/components/AppAlert";
import alertMixin from "@/alertMixin";
export default {
  mixins: [alertMixin],
  components: {AppAlert},
}
</script>

