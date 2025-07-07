<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-primary to-accent dark:from-slate-900 dark:to-slate-800 transition-colors duration-500">
    <!-- Navbar -->
    <header class="backdrop-blur bg-glass/80 dark:bg-darkglass/80 shadow-glass sticky top-0 z-30">
      <div class="container mx-auto flex items-center justify-between py-4 px-4">
        <NuxtLink to="/" class="text-2xl font-extrabold tracking-tight text-primary dark:text-accent drop-shadow">Nuxt Supabase Blog</NuxtLink>
        <nav class="hidden md:flex space-x-6 font-semibold">
          <NuxtLink to="/about" class="hover:text-accent transition">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-accent transition">Contact</NuxtLink>
          <NuxtLink to="/login" class="hover:text-accent transition">Admin</NuxtLink>
        </nav>
        <button @click="toggleDark" class="ml-4 p-2 rounded-full bg-white/60 dark:bg-slate-700/60 shadow hover:scale-110 transition">
          <span v-if="isDark">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative flex flex-col items-center justify-center text-center py-16 md:py-24 px-4">
      <div class="absolute inset-0 bg-hero-gradient opacity-30 blur-2xl pointer-events-none"></div>
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900 dark:text-white drop-shadow-lg">Welcome to Your <span class="text-primary dark:text-accent">Super Cool</span> Blog</h1>
      <p class="text-lg md:text-2xl text-slate-700 dark:text-slate-200 max-w-2xl mx-auto mb-8">A modern, SEO-optimized, feature-rich blog platform powered by Nuxt 3 & Supabase.</p>
      <NuxtLink to="#posts" class="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-accent hover:scale-105 transition">Explore Posts</NuxtLink>
    </section>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4" id="posts">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-12 bg-glass/80 dark:bg-darkglass/80 backdrop-blur shadow-glass text-center p-6 text-sm text-slate-600 dark:text-slate-300">
      <div class="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-2">
        <div>
          © {{ new Date().getFullYear() }} <span class="font-bold">Nuxt Supabase Blog</span>. All rights reserved.
        </div>
        <div class="flex space-x-4 mt-2 md:mt-0">
          <a href="#" class="hover:text-accent transition">Twitter</a>
          <a href="#" class="hover:text-accent transition">GitHub</a>
          <a href="#" class="hover:text-accent transition">Newsletter</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isDark = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script> 