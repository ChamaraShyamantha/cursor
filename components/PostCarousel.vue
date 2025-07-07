<template>
  <div>
    <h2 class="text-xl font-extrabold mb-4">{{ title }}</h2>
    <div class="flex space-x-4 overflow-x-auto pb-2">
      <div v-for="post in posts" :key="post.id" class="min-w-[260px] max-w-xs flex-shrink-0">
        <PostCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PostCard from './PostCard.vue'
const props = defineProps({
  title: String,
  posts: Array
})
</script> 