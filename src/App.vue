<template>
  <div id="app">
    <div class="container grid-lg pt-1">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
           <!-- Webpack sets src folder as @ -->
          <img class="img-responsive img-logo" src="@/assets/todoLogo.png" alt="Logo" />
        </section>
        <section class="navbar-section">
          <a href="https://github.com/lanzath/vue-basic-todo.git" class="btn btn-link">Github (Source Code)</a>
          <a href="https://www.linkedin.com/in/mt-lanza/" class="btn btn-link">LinkedIn</a>
        </section>
      </header>

      <router-view class="pt-2" />
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
      max-width: 100px;
    }
</style>