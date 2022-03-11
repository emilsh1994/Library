<template>
  <div>
    <table class="table table-striped" v-if="books && books.length">
      <thead class="table-dark">
      <tr>
        <th scope="col">id</th>
        <th scope="col">Название</th>
        <th scope="col">Количество</th>
        <th scope="col">Управление</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="book of books" :key="book">
        <td>{{ book.id }}</td>
        <td>{{ book.title }}</td>
        <td>{{ book.quantity }}</td>
        <td>
          <button class="btn btn-secondary" style="margin-right:10px;" @click="editBook(book)">Изм.</button>
          <button class="btn btn-danger" @click="removeBook(book)">Удалить</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
let url = 'http://localhost:8080/'

export default {
  data() {
    return {
      books: []
    }
  },
  created() {
    axios.get(url + 'book').then(response => {
      this.books = response.data
    })
  },
  methods: {
    removeBook: function (book) {
      console.log(book.id);
      axios.delete(url + 'book/' + book.id);
    },
    editBook: function (book) {
      console.log(book.id);
    }
  }
}
</script>
