# Nuxt 3 + Supabase Blog Platform

A modern, SEO-optimized blog platform with a WordPress-style admin dashboard, built with Nuxt 3, Supabase, and Tailwind CSS. Features include:

- Supabase Auth for admin/editor login
- Full-featured admin dashboard (posts, pages, users, settings)
- Blog with categories, tags, search, filtering
- Comments (Disqus or native)
- SEO best practices (meta tags, Open Graph, sitemap, robots.txt)
- RSS feed
- Responsive design
- Image uploads (Supabase Storage)
- Newsletter signup
- Analytics (Plausible, GA, or Supabase)

## Tech Stack
- [Nuxt 3](https://nuxt.com/) (Vue 3, SSR/SSG)
- [Supabase](https://supabase.com/) (Auth, DB, Storage)
- [Tailwind CSS](https://tailwindcss.com/)
- [Disqus](https://disqus.com/) (comments)
- [Plausible](https://plausible.io/) or [Google Analytics](https://analytics.google.com/)

## Setup

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a Supabase project and set up tables (see `/supabase/schema.sql`)
4. Copy `.env.example` to `.env` and add your Supabase URL and anon key
5. Run the dev server:
   ```bash
   npm run dev
   ```
6. Deploy to Netlify (SSG recommended)

## Deployment
- Configure environment variables in Netlify dashboard
- Set build command: `npm run generate`
- Set publish directory: `.output/public`

## License
MIT 