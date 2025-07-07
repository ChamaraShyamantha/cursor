<template>
  <div class="min-h-screen flex bg-gray-50">
    <AdminSidebar />
    <main class="flex-1 p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import AdminSidebar from '~/components/AdminSidebar.vue'
</script> 