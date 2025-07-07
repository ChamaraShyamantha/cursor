<template>
  <aside class="w-64 bg-white shadow h-screen flex flex-col">
    <div class="p-6 font-bold text-lg border-b">Admin Dashboard</div>
    <nav class="flex-1 p-4 space-y-2">
      <NuxtLink to="/admin" class="block px-3 py-2 rounded hover:bg-gray-100">Dashboard</NuxtLink>
      <NuxtLink to="/admin/posts" class="block px-3 py-2 rounded hover:bg-gray-100">Posts</NuxtLink>
      <NuxtLink to="/admin/pages" class="block px-3 py-2 rounded hover:bg-gray-100">Pages</NuxtLink>
      <NuxtLink to="/admin/users" class="block px-3 py-2 rounded hover:bg-gray-100">Users</NuxtLink>
      <NuxtLink to="/admin/settings" class="block px-3 py-2 rounded hover:bg-gray-100">Settings</NuxtLink>
    </nav>
    <div class="p-4 border-t">
      <button @click="logout" class="w-full text-left px-3 py-2 rounded hover:bg-gray-100">Logout</button>
    </div>
  </aside>
</template>

<script setup>
import { useSupabaseAuth } from '~/composables/useSupabaseAuth'
const { logout } = useSupabaseAuth()
</script> 