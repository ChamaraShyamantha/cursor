<template>
  <footer class="border-t bg-white text-center p-6 text-sm text-slate-500">
    <div class="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-2">
      <div>
        © 2025 <span class="font-bold">The Backstage Whisper</span>. All rights reserved.
      </div>
      <div class="flex space-x-4 mt-2 md:mt-0">
        <a href="#" class="hover:text-accent transition">Twitter</a>
        <a href="#" class="hover:text-accent transition">GitHub</a>
        <a href="#" class="hover:text-accent transition">Newsletter</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  mostRecent: Array,
  mostPopular: Array
})
</script> 