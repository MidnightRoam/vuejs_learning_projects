<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(request, index) in requests" :key="request.id">
      <td>{{ index + 1 }}</td>
      <td>{{ request.fio }}</td>
      <td>{{ request.phone }}</td>
      <td>{{ request.amount }}</td>
      <td>{{ request.status }}</td>
      <td>
<!--        <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">-->
<!--          <button class="btn primary" @click="navigate">Открыт</button>-->
<!--        </router-link>-->
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "RequestTable",
  props: ['requests']
}
</script>

<style scoped>

</style>