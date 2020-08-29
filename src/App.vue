<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <!-- Webpack sets src folder as @ -->
      <img class="img-responsive img-logo" src="@/assets/todoLogo.png" alt="Logo">
      <form action="">
        <div class="input-group py-2">
          <input class="form-input" type="text" placeholder="Nova tarefa">
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
  .img-logo {
    max-width: 200px;
    margin: 0 auto;
  }
</style>
