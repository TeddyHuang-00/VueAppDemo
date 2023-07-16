<template>
  <div class="pt-1 flex flex-row gap-1">
    <h1
      class="w-full p-4 rounded-lg border border-gray-300 text-xl text-gray-900 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    >
      {{ msg }}
    </h1>
    <button
      @click="$emit('delete')"
      class="flex-1 px-4 py-2 rounded-lg text-md font-medium text-white bg-rose-600 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-rose-300"
    >
      Delete
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  msg: String,
});

defineEmits({
  delete: null,
});
</script>
