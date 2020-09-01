import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// todos is an empty array as initial state
const state = {todos: []};

// Action to simulate API call
const actions = {
  // using setTimeout to simulate wait time of API call
  addTodo({commit}, todo) {
    return new Promise(resolve => {
      setTimeout(() => {
        todo.id = Date.now()
        commit('addTodo', todo)
        resolve(todo)
      }, 1000)
    })
  }
}

// payload is the state new value
const mutations = {
  addTodo(state, payload) {
    state.todos.push(payload)
  }
}

// Stores a new state management
const store = new Vuex.Store({state, actions, mutations});

export default store;
