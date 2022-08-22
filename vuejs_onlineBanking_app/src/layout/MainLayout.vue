<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import appMessage from "@/components/ui/AppMessage";
export default {
  name: "MainLayout",
  components: {TheNavbar, appMessage}
}
</script>

<style scoped>

</style>