import { useSupabaseUser, useSupabaseClient } from '#imports'
import { ref, computed } from 'vue'

export function useSupabaseAuth() {
  const user = useSupabaseUser()
  const client = useSupabaseClient()
  const loading = ref(false)
  const error = ref(null)

  const role = computed(() => user.value?.user_metadata?.role || 'subscriber')

  async function login(email: string, password: string) {
    loading.value = true
    error.value = null
    const { error: err } = await client.auth.signInWithPassword({ email, password })
    if (err) error.value = err.message
    loading.value = false
  }

  async function logout() {
    await client.auth.signOut()
  }

  return { user, role, login, logout, loading, error }
} 