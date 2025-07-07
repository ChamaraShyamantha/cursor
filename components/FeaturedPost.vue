<template>
  <div class="bg-white rounded-lg shadow-card p-6 flex flex-col md:flex-row gap-6">
    <img :src="post.image" alt="Featured" class="w-full md:w-72 h-56 object-cover rounded-lg" />
    <div class="flex-1 flex flex-col justify-between">
      <div>
        <div class="text-xs font-bold uppercase text-accent mb-2">{{ post.category }}</div>
        <h2 class="text-2xl font-extrabold mb-2 leading-tight">{{ post.title }}</h2>
        <p class="text-slate-600 mb-4">{{ post.summary }}</p>
      </div>
      <NuxtLink :to="post.link" class="inline-block bg-accent text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Read More</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: Object
})
</script> 