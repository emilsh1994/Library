<template>
  <div>
    <ul v-if="books && books.length">
      <li v-for="book of books" :key="book">
        <p><strong>{{ book.bookId }}</strong></p>
        <p>{{ book.bookName }}</p>
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
      // JSON responses are automatically parsed.
      this.books = response.data
    }).catch(e => {
      this.errors.push(e)
    })
  }
}
</script>