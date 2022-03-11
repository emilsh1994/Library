<template>
  <div class="books">
    <h1>Список книг:</h1>
  <Books/>
  </div>
</template>

<script>
  import Books from '@/components/Books-component.vue'
  export default {
    components: {
      Books
    }
  }
</script>
