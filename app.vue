<template>
  <NuxtLayout />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Set dark mode class on html if preferred
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
html {
  font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
}
</style> 