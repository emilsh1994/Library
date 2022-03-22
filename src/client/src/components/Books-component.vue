<template>
  <button style="margin: 10px" @click="dialogVisibility()">
    Добавить книгу
  </button>

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
            
            <div v-if="dialogVisible">
              <book-form
                @createBookAction="addBook"
                @closeForm="dialogVisibility()"
                :bookProp="book"
              />
            </div>

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
      dialogVisible: false,
      bookToEdit: null,
    };
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
    closeForm() {
      this.dialogVisibility();
    },
    dialogVisibility() {
      this.dialogVisible = !this.dialogVisible;
    },
    editBook(book) {
      console.log(book.id + " for edit");
      this.dialogVisible = true;
      this.$emit("editingBook", book);
    },
    removeBook(book) {
      let id = book.id;
      try {
        this.$store.dispatch("deleteBook", id);
      } catch (e) {
        console.log(e);
      }
    },
    addBook(book) {
      this.dialogVisible = false;
      try {
        this.$store.dispatch("addBook", book);
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
