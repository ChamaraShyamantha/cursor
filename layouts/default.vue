<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-900">
    <Header />
    <main class="flex-1 container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main content -->
        <section class="lg:col-span-2 space-y-8">
          <slot />
        </section>
        <!-- Sidebar -->
        <aside class="hidden lg:block space-y-8">
          <!-- Sidebar content will go here -->
        </aside>
      </div>
    </main>
    <footer class="border-t bg-white text-center p-6 text-sm text-slate-500">
      <div class="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto gap-2">
        <div>
          © {{ new Date().getFullYear() }} <span class="font-bold">The Backstage Whisper</span>. All rights reserved.
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
import Header from '~/components/Header.vue'
</script> 