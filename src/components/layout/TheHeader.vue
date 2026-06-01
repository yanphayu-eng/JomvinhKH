<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 px-5 md:px-10 py-6 flex items-center justify-between transition-all duration-300 border-b',
      scrolled ? 'bg-neutral-900/80 backdrop-blur-md border-neutral-800' : 'bg-transparent border-transparent'
    ]"
  >
    <router-link to="/">
      <div class="text-xl font-bold tracking-widest text-white">
      JOMVINH<span style="color: transparent ; -webkit-text-stroke:1px #d4a853 ;">KH</span>
    </div>
    </router-link>

    <nav class="hidden space-x-8 md:flex">
      <router-link to="/" class="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Home</router-link>
      <router-link to="/view" class="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Views</router-link>
      <router-link to="/contact" class="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Contact</router-link>
    </nav>

    <div class="flex items-center gap-1">
      <button @click.stop="toggleSearch" class="flex items-center justify-center size-10 text-white/70 hover:text-white transition-colors duration-300">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>

      <button @click="menuOpen = !menuOpen" class="md:hidden relative z-50 size-8 flex items-center justify-center">
        <svg v-if="!menuOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  </header>

  <div
    v-show="searchOpen"
    @click.stop
    class="fixed top-0 left-0 w-full z-40 pt-24 pb-4 px-5 md:px-10 bg-neutral-900/95 backdrop-blur-md border-b border-neutral-800"
  >
    <div class="max-w-2xl mx-auto relative">
      <svg class="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
      <input
        ref="searchInputRef"
        v-model="searchQuery"
        @keydown.escape="closeSearch"
        @input="onSearchInput"
        placeholder="Search provinces..."
        class="w-full bg-neutral-800/80 border border-neutral-700 text-white placeholder:text-white/25 pl-12 pr-4 py-3 text-sm md:text-sm font-light outline-none focus:border-yellow-500/50 transition-colors duration-300"
        style="font-size: 16px"
      />
      <button @click="closeSearch" class="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors duration-300">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <div v-if="searchResults.length" class="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-700 max-h-64 overflow-y-auto">
        <router-link
          v-for="result in searchResults"
          :key="result.id"
          :to="`/view/${result.id}`"
          @click="closeSearch"
          class="flex items-center gap-3 px-4 py-3 hover:bg-neutral-700 transition-colors duration-200 border-b border-neutral-700/50 last:border-b-0"
        >
          <img :src="result.image" :alt="result.name" class="size-10 object-cover shrink-0" />
          <div class="min-w-0">
            <p class="text-sm font-medium text-white truncate">{{ result.name }}</p>
            <p class="text-xs text-white/40 truncate">{{ result.type }} &middot; {{ result.capital }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <Transition name="menu-drop">
    <div
      v-show="menuOpen"
      class="fixed left-0 right-0 z-40 md:hidden"
      :class="[
        'top-0 pt-20 pb-6 px-5 backdrop-blur-md border-b transition-all duration-300',
        scrolled ? 'bg-neutral-900/95 border-neutral-800' : 'bg-neutral-900/95 border-neutral-800'
      ]"
    >
      <nav class="flex flex-col gap-1">
        <router-link to="/" @click="menuOpen = false" class="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all rounded">Home</router-link>
        <router-link to="/view" @click="menuOpen = false" class="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all rounded">Views</router-link>
        <router-link to="/contact" @click="menuOpen = false" class="px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all rounded">Contact</router-link>
      </nav>
    </div>
  </Transition>
  <div v-show="menuOpen" @click="menuOpen = false" class="fixed inset-0 z-30 md:hidden bg-transparent"></div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import provinces from '../../storages/provinces.js'

const scrolled = ref(false)
const menuOpen = ref(false)
const searchOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref(null)

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return []
  return provinces
    .filter(p => p.name.toLowerCase().includes(q) || p.capital.toLowerCase().includes(q))
    .slice(0, 6)
})

function onSearchInput() {
}

function toggleSearch() {
  searchOpen.value = !searchOpen.value
  if (searchOpen.value) {
    menuOpen.value = false
    nextTick(() => searchInputRef.value?.focus())
  }
}

function closeSearch() {
  searchOpen.value = false
  searchQuery.value = ''
}

function handleClickOutside() {
  if (searchOpen.value) closeSearch()
}

function handleScroll() {
  scrolled.value = window.scrollY > 0
  if (menuOpen.value) menuOpen.value = false
}

function handleResize() {
  if (window.innerWidth >= 768) menuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.menu-drop-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.menu-drop-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.menu-drop-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}
.menu-drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
