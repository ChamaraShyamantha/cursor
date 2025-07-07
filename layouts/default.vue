<template>
  <div class="min-h-screen flex flex-col bg-white text-slate-900">
    <!-- Navbar -->
    <header class="border-b bg-white sticky top-0 z-30">
      <div class="container mx-auto flex items-center justify-between py-4 px-4">
        <NuxtLink to="/" class="text-2xl font-extrabold tracking-tight text-accent">Nuxt Supabase Blog</NuxtLink>
        <nav class="hidden md:flex space-x-6 font-semibold">
          <NuxtLink to="/about" class="hover:text-accent transition">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-accent transition">Contact</NuxtLink>
          <NuxtLink to="/login" class="hover:text-accent transition">Admin</NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4 py-12">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t bg-white text-center p-6 text-sm text-slate-500">
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