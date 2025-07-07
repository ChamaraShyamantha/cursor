<template>
  <header class="border-b bg-white sticky top-0 z-30">
    <div class="container mx-auto flex items-center justify-between py-4 px-4">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/" class="text-3xl font-extrabold tracking-tight font-serif">The Backstage Whisper</NuxtLink>
        <span class="text-xs font-semibold text-accent ml-2">Lifestyle Magazine</span>
      </div>
      <div class="flex items-center space-x-6">
        <form class="hidden md:block">
          <input type="text" placeholder="Search..." class="border rounded px-3 py-1 text-sm focus:outline-accent" />
        </form>
        <NuxtLink to="/account" class="font-semibold hover:text-accent transition">My Account</NuxtLink>
        <button class="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">AB</button>
      </div>
    </div>
  </header>
</template> 