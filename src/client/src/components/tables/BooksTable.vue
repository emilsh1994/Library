<template>
  <div>
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Название</th>
          <th scope="col">Количество</th>
          <th scope="col">Управление</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book of books" :key="book.id">
          <td>{{ book.id }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.quantity }}</td>
          <td>
            <button
              class="btn btn-secondary"
              style="margin-right: 10px"
              @click="editBook(book)"
            >
              Изм.
            </button>

            <button class="btn btn-danger" @click="removeBook(book)">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    books: Array
  },
  methods: {
    removeBook(book) {
      this.$emit('removeBook', book)
    },
    editBook(book) {
      this.$emit('editBook', book)
    }
  }
}
</script>

