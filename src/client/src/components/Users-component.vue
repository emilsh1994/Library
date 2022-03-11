<template>
  <div>
    <ul v-if="users && users.length">
      <li v-for="user of users" :key="user">
        <p><strong>{{ user.id }}</strong></p>
        <p>{{ user.surname }}</p>
        <p>{{ user.name }}</p>
        <p>{{ user.patronymic }}</p>
        <br>
      </li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" :key="error">
        {{ error.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      errors: []
    }
  },
  created() {
    axios.get(`http://localhost:8080/user/`).then(response => {
      this.users = response.data
    }).catch(e => {
      this.errors.push(e)
    })
  }
}
</script>