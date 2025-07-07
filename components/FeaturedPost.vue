<template>
  <section class="bg-white rounded-lg shadow-card p-6 mb-8">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <img :src="post.image" alt="Featured" class="rounded-lg object-cover w-full h-56 md:h-72" />
      <div>
        <div class="text-xs font-bold text-accent uppercase mb-2">Exclusive Content</div>
        <h1 class="text-3xl font-extrabold mb-4 leading-tight">{{ post.title }}</h1>
        <p class="text-lg text-slate-600 mb-4">{{ post.summary }}</p>
        <a :href="post.link" class="inline-block bg-accent text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition">Read Post</a>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  post: Object
})
</script> 