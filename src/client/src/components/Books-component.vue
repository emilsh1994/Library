<template>
  <div>


    <ul v-if="books && books.length">
      <li v-for="book of books" :key="book">
        <p><strong>{{ book.id }}</strong></p>
        <p>{{ book.title }}</p>
        <p>{{ book.count }}</p>
        <br>
        <button class="btn btn-primary">Knopka 1</button>
        <button class="btn btn-primary">Knopka 2</button>
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
      books: [],
      errors: []
    }
  },
  created() {
    axios.get(`http://localhost:8080/book/`).then(response => {
      this.books = response.data
    }).catch(e => {
      this.errors.push(e)
    })
  }
}
</script>