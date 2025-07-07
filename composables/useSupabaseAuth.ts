import { ref, computed } from 'vue'
import { supabase } from '~/supabase/client'

const user = ref(null)
const loading = ref(false)
const error = ref(null)

// On load, check for existing session
autoFetchUser()

function autoFetchUser() {
  const session = supabase.auth.getSession()
  session.then(({ data }) => {
    user.value = data?.session?.user || null
  })
  supabase.auth.onAuthStateChange((_event, session) => {
    user.value = session?.user || null
  })
}

const role = computed(() => user.value?.user_metadata?.role || 'subscriber')

async function login(email, password) {
  loading.value = true
  error.value = null
  const { error: err, data } = await supabase.auth.signInWithPassword({ email, password })
  if (err) error.value = err.message
  user.value = data?.user || null
  loading.value = false
}

async function logout() {
  await supabase.auth.signOut()
  user.value = null
}

export function useSupabaseAuth() {
  return { user, role, login, logout, loading, error }
} 