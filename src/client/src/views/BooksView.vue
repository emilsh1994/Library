<template>
  <div class="books">
  <BookComponent/>
  </div>
</template>

<script>
  import BookComponent from '@/components/Books-component.vue'
  export default {
    components: {
      BookComponent
    }
  }
</script>
