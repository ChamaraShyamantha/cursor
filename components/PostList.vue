<template>
  <div class="space-y-4">
    <div v-for="i in 3" :key="i" class="p-4 bg-white rounded shadow">
      <div class="h-4 w-1/3 bg-gray-200 rounded mb-2"></div>
      <div class="h-3 w-2/3 bg-gray-100 rounded"></div>
    </div>
    <div class="text-gray-400 text-sm">(Posts will appear here)</div>
  </div>
</template> 