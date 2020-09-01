<template>
  <div class="container grid-xs py-2">
      <!-- Submit and prevent default event -->
      <form @submit.prevent="addTodo(todo)">
        <div class="input-group py-2">
          <input
            type="text"
            v-model="todo.description"
            class="form-input"
            placeholder="Nova tarefa"
          />
          <button class="btn btn-primary input-group-btn">Adicionar</button>
        </div>
      </form>

      <div class="todo-list">
        <Todo
          v-for="todo in todos"
          :key="todo.id"
          @toggle="toggleTodo"
          @remove="removeTodo"
          :todo="todo"
        />
      </div>
    </div>
</template>

<script>
import Todo from '@/components/Todo';

export default {
  name: 'Home',
  components: { Todo },
  data() {
      return { todos: [], todo: { checked: false } };
    },
    methods: {
      addTodo(todo) {
        todo.id = Date.now();
        this.todos.push(todo);
        this.todo = { checked: false };
      },

      toggleTodo(todo) {
        const index = this.todos.findIndex(item => item.id === todo.id);
        if (index > -1) {
          const checked = !this.todos[index].checked;
          this.$set(this.todos, index, {...this.todos[index], checked})
        }
      },

      removeTodo(todo) {
        const index = this.todos.findIndex(item => item.id === todo.id);
        if (index > -1) {
          this.$delete(this.todos, index);
        }
      }
    }
}
</script>

<style scoped>
  .todo-list {
    padding-top: 2rem;
  }
</style>