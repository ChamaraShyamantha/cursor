<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h1>
    <div class="grid grid-cols-2 gap-4">
      <NuxtLink to="/admin/posts" class="p-6 bg-white rounded shadow hover:bg-gray-50">
        <div class="font-semibold">Manage Posts</div>
        <div class="text-gray-500 text-sm">Create, edit, and publish blog posts</div>
      </NuxtLink>
      <NuxtLink to="/admin/pages" class="p-6 bg-white rounded shadow hover:bg-gray-50">
        <div class="font-semibold">Manage Pages</div>
        <div class="text-gray-500 text-sm">Edit static pages like About, Contact</div>
      </NuxtLink>
      <NuxtLink to="/admin/users" class="p-6 bg-white rounded shadow hover:bg-gray-50">
        <div class="font-semibold">Manage Users</div>
        <div class="text-gray-500 text-sm">View and manage registered users</div>
      </NuxtLink>
      <NuxtLink to="/admin/settings" class="p-6 bg-white rounded shadow hover:bg-gray-50">
        <div class="font-semibold">Site Settings</div>
        <div class="text-gray-500 text-sm">Update site title, logo, analytics, etc.</div>
      </NuxtLink>
    </div>
  </div>
</template> 