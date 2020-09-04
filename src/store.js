import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// todos is an empty array as initial state
const state = { todos: [], loading: false };

// Actions handle the commit mutations
const actions = {
  // using setTimeout to simulate wait time of API call
  addTodo({commit}, todo) {
    commit('setLoading', true)
    return new Promise(resolve => {
      setTimeout(() => {
        todo.id = Date.now()
        commit('addTodo', todo)
        commit('setLoading', false)
        resolve(todo)
      }, 500)
    })
  },

  toggleTodo({ commit }, todo) {
    commit('toggleTodo', todo)
  },

  removeTodo({ commit }, todo) {
    commit('removeTodo', todo)
  }
}

// Payload is the state new value
// Mutations will handle the state changes
const mutations = {
  addTodo(state, payload) {
    state.todos.push(payload)
  },

  setLoading(state, payload) {
    state.loading = payload
  },

  toggleTodo(state, payload) {
    const index = state.todos.findIndex(item => item.id === payload.id);
    if (index > -1) {
      const checked = !state.todos[index].checked;
      Vue.set(state.todos, index, {...state.todos[index], checked})
    }
  },

  removeTodo(state, payload) {
    state.todos = state.todos.filter(filteredTodos => filteredTodos.id !== payload.id)
  }
}

// Stores a new state management
const store = new Vuex.Store({state, actions, mutations});

export default store;
