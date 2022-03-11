<template>
  <div class="authors">
    <h1>Пользователи:</h1>
    <UsersComponent/>
  </div>
</template>

<script>
import UsersComponent from "@/components/Users-component";
export default {
  components: {
    UsersComponent
  }
}
</script>
