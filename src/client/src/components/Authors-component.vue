<template>
  <div>
    <ul v-if="authors && authors.length">
      <li v-for="author of authors" :key="author">
        <p><strong>{{ author.authorId }}</strong></p>
        <p>{{ author.surname }}</p>
        <p>{{ author.name }}</p>
        <p>{{ author.patronymic }}</p>
        <p>{{ author.description }}</p>
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
      authors: [],
      errors: []
    }
  },
  created() {
    axios.get(`http://localhost:8080/author/`).then(response => {
      this.authors = response.data
    }).catch(e => {
      this.errors.push(e)
    })
  }
}
</script>