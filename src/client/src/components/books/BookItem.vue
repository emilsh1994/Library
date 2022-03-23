<template>
  <div class="book">
    <div style="display: flex">
    <strong>id:</strong> {{ book.id }}</div>
    <strong>Название:</strong> {{ book.title }} 
    <strong>Количество:</strong>{{ book.quantity }} <strong>Тип книги:</strong> {{ book.type }}
    <button
      class="btn btn-secondary"
      style="margin-right: 10px"
      @click="editBook(book)"
    >
      Изм.
    </button>
    <button class="btn btn-danger" @click="removeBook(book)">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    editBook(book) {
      this.$store.dispatch("setBook", book);
      this.$store.dispatch("switchForm", true);
    },
    removeBook(book) {
      this.$store.dispatch("deleteBook", book.id);
    },
  },
};
</script>

<style>
.book {
  padding: 15px;
  border: 2px solid teal;
  display: flex;
  margin-top: 15px;
  align-items: center;
  justify-content: space-between;
}
</style>