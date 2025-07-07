<template>
  <section class="mb-8">
    <div class="flex items-center justify-between mb-2">
      <h2 class="text-xl font-extrabold">{{ title }}</h2>
      <div class="space-x-2">
        <button @click="prev" class="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center hover:bg-gray-200">&#8592;</button>
        <button @click="next" class="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center hover:bg-gray-200">&#8594;</button>
      </div>
    </div>
    <div class="flex overflow-x-auto space-x-4 pb-2">
      <PostCard v-for="post in visiblePosts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import PostCard from './PostCard.vue'
const props = defineProps({
  title: String,
  posts: Array
})
const start = ref(0)
const visibleCount = 3
const visiblePosts = computed(() => props.posts.slice(start.value, start.value + visibleCount))
function prev() {
  if (start.value > 0) start.value--
}
function next() {
  if (start.value < props.posts.length - visibleCount) start.value++
}
</script> 