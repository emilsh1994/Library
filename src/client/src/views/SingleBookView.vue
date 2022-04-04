<template>
<div>
  <h1>Book id is = {{ $route.params.id }}</h1>
</div>
</template>

<script>
export default {
  computed: {
    book() {
      return this.$store.getters();
    }
  }
}
</script>

<style>
</style>