<template>
  <div class="container grid-xs py-2">
      <!-- Submit and prevent default event -->
      <form @submit.prevent="add(todo)">
        <div class="input-group py-2">
          <input
            type="text"
            v-model="todo.description"
            class="form-input"
            placeholder="Nova tarefa"
          />
          <button class="btn btn-primary input-group-btn" :class="{loading}">Adicionar</button>
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
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Home',
  components: { Todo },
  data() {
      return { todo: { checked: false } };
    },
    computed: {
      // mapping states with vuex to handle states change
      ...mapState(['todos', 'loading'])
    },
    methods: {
      // mapping actions with vuex to handle todos functionalities
      ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),

      async add(todo) {
        await this.addTodo(todo);
        this.todo = { checked: false }
      }
    }
}
</script>

<style scoped>
  .todo-list {
    padding-top: 2rem;
  }
</style>