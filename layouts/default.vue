<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-900">
    <Header />
    <main class="flex-1 container mx-auto px-4 py-8">
      <slot />
    </main>
    <FooterColumns />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import FooterColumns from '~/components/FooterColumns.vue'
</script> 