<template>
  <div class="container">
      <app-message></app-message>
      <router-view></router-view>
  </div>
</template>

<script>
import appMessage from "@/components/ui/AppMessage";
export default {
  name: "AuthLayout",
  components: {appMessage}
}
</script>

<style scoped>

</style>