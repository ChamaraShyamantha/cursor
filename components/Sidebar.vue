<template>
  <aside class="space-y-8">
    <section class="bg-white rounded-lg shadow-card p-4">
      <h4 class="font-bold mb-2">Latest</h4>
      <ul>
        <li v-for="post in latest" :key="post.id" class="mb-2">
          <a :href="post.link" class="text-accent hover:underline">{{ post.title }}</a>
        </li>
      </ul>
    </section>
    <section class="bg-white rounded-lg shadow-card p-4">
      <h4 class="font-bold mb-2">Stay in touch</h4>
      <div class="flex space-x-2">
        <a href="#" class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center">T</a>
        <a href="#" class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center">G</a>
        <a href="#" class="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center">N</a>
      </div>
    </section>
    <section class="bg-white rounded-lg shadow-card p-4">
      <h4 class="font-bold mb-2">Newsletter</h4>
      <form class="flex flex-col space-y-2">
        <input type="email" placeholder="Your email" class="border rounded px-3 py-1 text-sm" />
        <button type="submit" class="bg-accent text-white rounded px-3 py-1 font-semibold">Subscribe</button>
      </form>
    </section>
  </aside>
</template>

<script setup>
defineProps({
  latest: Array
})
</script> 