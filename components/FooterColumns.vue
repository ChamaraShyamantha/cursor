<template>
  <footer class="bg-white border-t py-10 mt-12">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-left text-sm">
      <div>
        <div class="font-bold mb-2">About us</div>
        <ul class="space-y-1">
          <li><a href="#" class="hover:text-accent">About</a></li>
          <li><a href="#" class="hover:text-accent">Contact</a></li>
          <li><a href="#" class="hover:text-accent">Privacy</a></li>
          <li><a href="#" class="hover:text-accent">Sitemap</a></li>
        </ul>
      </div>
      <div>
        <div class="font-bold mb-2">Most recent</div>
        <ul class="space-y-1">
          <li v-for="item in mostRecent" :key="item.id"><a :href="item.link" class="hover:text-accent">{{ item.title }}</a></li>
        </ul>
      </div>
      <div>
        <div class="font-bold mb-2">Most popular</div>
        <ul class="space-y-1">
          <li v-for="item in mostPopular" :key="item.id"><a :href="item.link" class="hover:text-accent">{{ item.title }}</a></li>
        </ul>
      </div>
      <div>
        <div class="font-bold mb-2">Subscribe</div>
        <form class="flex">
          <input type="email" placeholder="Your email" class="flex-1 border rounded-l px-3 py-2 text-sm focus:outline-accent" />
          <button type="submit" class="bg-accent text-white px-4 rounded-r font-semibold">Sign Up</button>
        </form>
      </div>
      <div>
        <div class="font-bold mb-2">Follow us</div>
        <div class="flex space-x-3 mt-2">
          <a href="#" class="hover:text-accent">Twitter</a>
          <a href="#" class="hover:text-accent">GitHub</a>
          <a href="#" class="hover:text-accent">Instagram</a>
        </div>
      </div>
    </div>
    <div class="text-center text-xs text-slate-400 mt-8">© {{ new Date().getFullYear() }} The Backstage Whisper. All rights reserved.</div>
  </footer>
</template>

<script setup>
const props = defineProps({
  mostRecent: Array,
  mostPopular: Array
})
</script> 