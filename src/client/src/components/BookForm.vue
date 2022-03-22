<template>
  <div class="form-bg">
    <form @submit.prevent class="form">
      <input v-model="title" type="text" placeholder="Название книги" />
      <input v-model="quantity" type="text" placeholder="Количество" />
      <input v-model="type" type="text" placeholder="Тип книги" />
      <button @click="createBook">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        title: '',
        quantity: '',
        type: ''
    };
  },
  methods: {
    createBook() {
      var book = {
        title: this.title,
        quantity: this.quantity,
        type: this.type
      };
      this.$emit('createBookAction', book)
    },
  },
};
</script>

<style>
.form-bg {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.form {
  background: teal;
  width: 400px;
  height: 200px;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: auto;
  align-items: center;
  align-content: center;
  padding-top: 30px;
  position: absolute;
  top: 40%;
  left: 40%;
}
</style>