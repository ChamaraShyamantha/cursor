<template>
  <div class="space-y-8">
    <!-- Latest -->
    <div class="bg-white rounded-lg shadow-card p-4">
      <h3 class="font-bold mb-2">Latest</h3>
      <ul class="space-y-2">
        <li v-for="item in latest" :key="item.id">
          <NuxtLink :to="item.link" class="hover:text-accent">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- Newsletter -->
    <div class="bg-white rounded-lg shadow-card p-4">
      <h3 class="font-bold mb-2">Newsletter</h3>
      <p class="text-sm text-slate-600 mb-2">Get the best stories delivered weekly!</p>
      <form class="flex">
        <input type="email" placeholder="Your email" class="flex-1 border rounded-l px-3 py-2 text-sm focus:outline-accent" />
        <button type="submit" class="bg-accent text-white px-4 rounded-r font-semibold">Sign Up</button>
      </form>
    </div>
    <!-- Don't miss -->
    <div class="bg-white rounded-lg shadow-card p-4">
      <h3 class="font-bold mb-2">Don't miss</h3>
      <ul class="space-y-2">
        <li v-for="item in dontMiss" :key="item.id">
          <NuxtLink :to="item.link" class="hover:text-accent">{{ item.title }}</NuxtLink>
        </li>
      </ul>
    </div>
    <!-- Stay in touch -->
    <div class="bg-white rounded-lg shadow-card p-4">
      <h3 class="font-bold mb-2">Stay in touch</h3>
      <div class="flex space-x-3">
        <a href="#" class="hover:text-accent">Twitter</a>
        <a href="#" class="hover:text-accent">GitHub</a>
        <a href="#" class="hover:text-accent">Instagram</a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  latest: Array,
  dontMiss: Array
})
</script> 