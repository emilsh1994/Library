<template>
  <button style="margin:10px" @click="dialogVisibility">Добавить книгу</button>
  <div v-if="dialogVisible">
    <book-form @createBookAction="addBook"/>
  </div>
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
            <button class="btn btn-secondary" style="margin-right: 10px">
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
import BookForm from "@/components/BookForm.vue";
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  components: {
    BookForm,
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
  methods: {
    dialogVisibility() {
      this.dialogVisible = !this.dialogVisible
    },
    removeBook(book) {
      let id = book.id;
      console.log(id);

      try {
        this.$store.dispatch("deleteBook", id);
      } catch (e) {
        console.log(e);
      }
    },
    addBook(book1) {
      this.dialogVisible = false;
      try {
        this.$store.dispatch("addBook", book1);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
};
</script>
