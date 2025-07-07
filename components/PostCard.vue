<template>
  <div class="bg-white rounded-lg shadow-card p-4 flex flex-col h-full">
    <img :src="post.image" alt="" class="rounded-lg object-cover w-full h-40 mb-4" />
    <div class="text-xs font-bold text-accent uppercase mb-1">{{ post.category }}</div>
    <h3 class="text-lg font-bold mb-2 leading-tight">{{ post.title }}</h3>
    <p class="text-sm text-slate-500 mb-2">{{ post.summary }}</p>
    <a :href="post.link" class="text-accent font-semibold hover:underline mt-auto">Read More</a>
  </div>
</template>

<script setup>
defineProps({
  post: Object
})
</script> 