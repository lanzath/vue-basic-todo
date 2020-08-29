<template>
  <div id="app">
    <div class="container grid-xs py-2">
      <!-- Webpack sets src folder as @ -->
      <img class="img-responsive img-logo" src="@/assets/todoLogo.png" alt="Logo">

      <!-- Submit and prevent default event -->
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group py-2">
          <input
            type="text"
            v-model="todo.description"
            class="form-input"
            placeholder="Nova tarefa"
          >
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>

      <div class="todo-list">
        <div v-for="todo in todos" :key="todo.id" class="tile">
          <div class="tile-icon">
            <i class="icon icon-time flex-centered"></i>
          </div>

          <div class="tile-content">
            <p class="tile-subtitle">{{ todo.description }}</p>
          </div>

          <div class="tile-action">
            <button class="btn btn-link">Concluído</button>
            <button class="btn btn-link">
              <span class="text-error">Remover</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return { todos: [], todo: { checked: false } };
    },
    methods: {
      addTodo(todo) {
        todo.id = Date.now();
        this.todos.push(todo);
        this.todo = { checked: false };
      }
    }
  }
</script>

<style scoped>
  .img-logo {
    max-width: 200px;
    margin: 0 auto;
  }

  .todo-list {
    padding-top: 2rem;
  }
</style>
