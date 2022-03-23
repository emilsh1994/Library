<template>
  <button @click="dialogVisibility()">Добавить книгу</button>
  <BooksTable :books="books" @removeBook="removeBook" @editBook="editBook" />
  <div v-if="dialogVisible">
    <BooksForm @createBookAction="addBook" @closeForm="closeForm" />
  </div>
</template>

<script>
import BooksTable from "@/components/tables/BooksTable.vue";
import BooksForm from "@/components/BookForm.vue";

export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  components: {
    BooksTable,
    BooksForm,
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
      console.log(book.id + " for edit from parent");
      this.$store.dispatch('getBook', book.id)
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
