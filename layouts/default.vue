<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-white shadow p-4 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold">Nuxt Supabase Blog</NuxtLink>
      <nav class="space-x-4">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/login">Admin</NuxtLink>
      </nav>
    </header>
    <main class="flex-1 container mx-auto p-4">
      <slot />
    </main>
    <footer class="bg-gray-100 text-center p-4 text-sm text-gray-500">
      © {{ new Date().getFullYear() }} Nuxt Supabase Blog. All rights reserved.
    </footer>
  </div>
</template> 