<template>
  <body class="w-full h-full min-h-screen bg-gray-300">
    <div class="container max-w-lg mx-auto py-8 px-10">
      <h1 class="text-3xl text-center py-10">Todo List</h1>

      <form @submit.prevent="appendTodo" class="relative">
        <input
          v-model="text"
          class="block w-full p-4 rounded-lg border border-gray-300 text-xl text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Add a todo..."
        />
        <button
          type="submit"
          class="absolute right-2.5 bottom-2.5 px-4 py-2 rounded-lg font-semibold text-xl text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Add
        </button>
      </form>
      <div v-if="num_todos">
        <div v-for="todo in todos">
          <TodoItem :msg="todo" @delete="removeTodo(todo)"></TodoItem>
        </div>
      </div>
      <div v-else class="pt-5 text-2xl text-center">No todos here...</div>
    </div>
  </body>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TodoItem from "./components/TodoItem.vue";

const text = ref("");
const todos = ref([] as string[]);
const num_todos = computed(() => todos.value.length);

function appendTodo() {
  if (todos.value.includes(text.value) || text.value === "") {
    return;
  }
  todos.value.push(text.value);
  text.value = "";
}

function removeTodo(msg: string) {
  todos.value = todos.value.filter((todo) => todo !== msg);
}
</script>
