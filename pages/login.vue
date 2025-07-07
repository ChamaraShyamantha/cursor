<template>
  <div class="max-w-md mx-auto mt-20 p-8 bg-white rounded shadow">
    <h1 class="text-2xl font-bold mb-6">Admin Login</h1>
    <form @submit.prevent="onLogin">
      <div class="mb-4">
        <label class="block mb-1">Email</label>
        <input v-model="email" type="email" class="w-full border rounded px-3 py-2" required />
      </div>
      <div class="mb-4">
        <label class="block mb-1">Password</label>
        <input v-model="password" type="password" class="w-full border rounded px-3 py-2" required />
      </div>
      <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
      <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded font-semibold" :disabled="loading">
        <span v-if="loading">Logging in...</span>
        <span v-else>Login</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSupabaseAuth } from '~/composables/useSupabaseAuth'

const email = ref('')
const password = ref('')
const { login, error, loading, user } = useSupabaseAuth()
const router = useRouter()

async function onLogin() {
  await login(email.value, password.value)
  if (!error.value && user.value) {
    router.push('/admin')
  }
}
</script> 