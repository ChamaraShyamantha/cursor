<template>
  <div>
    <!-- Exclusive Content Bar -->
    <div class="bg-accent text-white text-xs font-semibold px-4 py-2 rounded-t mb-4">EXCLUSIVE CONTENT</div>
    <!-- Featured Post -->
    <FeaturedPost :post="featuredPost" />
    <!-- Main grid: 2 columns on desktop, 1 on mobile -->
    <div class="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Main content -->
      <div class="lg:col-span-8 space-y-8">
        <!-- Carousels -->
        <PostCarousel title="Most Popular" :posts="mostPopular" />
        <PostCarousel title="Must Read" :posts="mustRead" />
        <!-- Category Section: Food & Recipes -->
        <h2 class="text-xl font-extrabold mb-4 mt-8">Food & Recipes</h2>
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <PostCard v-for="post in foodRecipes" :key="post.id" :post="post" />
        </div>
        <!-- Category Section: Podcasts & Music -->
        <h2 class="text-xl font-extrabold mb-4">Podcasts & Music</h2>
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <PostCard v-for="post in podcastsMusic" :key="post.id" :post="post" />
        </div>
        <!-- Recent Stories -->
        <h2 class="text-xl font-extrabold mb-4">Recent stories</h2>
        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <PostCard v-for="post in recentStories" :key="post.id" :post="post" />
        </div>
      </div>
      <!-- Sidebar (desktop only) -->
      <div class="hidden lg:block lg:col-span-4 space-y-8">
        <Sidebar :latest="recentStories" />
      </div>
    </div>
  </div>
</template>

<script setup>
import FeaturedPost from '~/components/FeaturedPost.vue'
import PostCarousel from '~/components/PostCarousel.vue'
import PostCard from '~/components/PostCard.vue'
import Sidebar from '~/components/Sidebar.vue'

const featuredPost = {
  id: 1,
  image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
  category: 'Lifestyle',
  title: 'How to Prevent Holes in Heel of Socks: The Ultimate Guide',
  summary: "Socks are among everyone's wardrobe, yet avoiding a hole is surprisingly hard. Here's how to tackle it.",
  link: '#'
}
const mostPopular = [
  { id: 2, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', category: 'Health', title: 'Can You Tweeze Leg Hair? Guide to Painful Body Hair Safety', summary: 'Is tweezing leg hair safe? Here\'s what you need to know.', link: '#' },
  { id: 3, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', category: 'Technology', title: 'How Does a Power Bank Work?', summary: 'A simple explanation of how power banks charge your devices.', link: '#' },
  { id: 4, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', category: 'Uncategorized', title: 'How to Teach First Aid in a Fun Way', summary: 'Make first aid fun and memorable for kids and adults.', link: '#' },
]
const mustRead = [
  { id: 5, image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d', category: 'Pets', title: 'What to Expect from a Male Dog After Mating', summary: 'Dog behavior after mating explained.', link: '#' },
  { id: 6, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', category: 'Relationships', title: 'Why Does My Best Friend Hate Me?', summary: 'Understanding friendship conflicts.', link: '#' },
  { id: 7, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', category: 'Science', title: 'Can Rose Quartz Go in Water?', summary: 'Is it safe to put rose quartz in water?', link: '#' },
]
const foodRecipes = [
  { id: 8, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', category: 'Food', title: 'Best Spots to Pick Fruits at the Catskills', summary: 'Where to find the best fruit picking spots.', link: '#' },
  { id: 9, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', category: 'Food', title: 'Creamy Pan Roasted Scallops With Fresh Tomatoes', summary: 'A creamy, savory scallop recipe.', link: '#' },
  { id: 10, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', category: 'Food', title: 'How Many Calories in a Slice of Sweet Potato Pie?', summary: 'Sweet potato pie nutrition facts.', link: '#' },
  { id: 11, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', category: 'Food', title: 'Can Tea Be Made in a Coffee Maker?', summary: 'Can you brew tea in a coffee maker?', link: '#' },
]
const podcastsMusic = [
  { id: 12, image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d', category: 'Music', title: 'Can You Use a Hot Glue Gun on Mirrors? Everything You Need to Know', summary: 'Tips for using glue guns on mirrors.', link: '#' },
  { id: 13, image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d', category: 'Music', title: 'How to Prevent Holes in Heel of Socks: The Ultimate Guide', summary: 'Sock care for musicians.', link: '#' },
]
const recentStories = [
  { id: 14, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca', category: 'Health', title: 'How to Prevent Holes in Heel of Socks: The Ultimate Guide', summary: "Socks are among everyone's wardrobe, yet avoiding a hole is surprisingly hard. Here's how to tackle it.", link: '#' },
  { id: 15, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', category: 'Health', title: 'The Best Way to Keep Feet Warm in Cold Weather: A Complete Guide', summary: 'Keep your feet warm and healthy.', link: '#' },
  { id: 16, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308', category: 'Science', title: 'Can a Dense Memory Foam Pillow Cause Tinnitus? A Sleep Expert Explains', summary: 'Pillow safety and sleep health.', link: '#' },
]
</script> 