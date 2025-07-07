<template>
  <div class="bg-white rounded-lg shadow-card overflow-hidden hover:shadow-lg transition cursor-pointer flex flex-col">
    <img :src="post.image" alt="" class="w-full h-40 object-cover" />
    <div class="p-4 flex-1 flex flex-col">
      <div class="text-xs font-bold uppercase text-accent mb-1">{{ post.category }}</div>
      <h3 class="text-lg font-bold mb-1 leading-tight">{{ post.title }}</h3>
      <div class="text-xs text-slate-500 mb-2">{{ post.meta }}</div>
      <p class="text-slate-600 text-sm flex-1">{{ post.summary }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})
</script> 