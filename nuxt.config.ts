import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@nuxt/image',
    '@nuxt/sitemap',
    '@nuxtjs/robots',
  ],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  app: {
    head: {
      title: 'Nuxt Supabase Blog',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A modern, SEO-optimized blog platform with Nuxt 3 and Supabase.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
  sitemap: {
    hostname: 'https://yourdomain.com',
  },
  robots: {
    rules: [{ userAgent: '*', allow: '/' }],
  },
}) 