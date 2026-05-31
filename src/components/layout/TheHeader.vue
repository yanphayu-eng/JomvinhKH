<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 px-10 py-6 flex items-center justify-between transition-all duration-300 border-b',
      scrolled ? 'bg-neutral-900/80 backdrop-blur-md border-neutral-800' : 'bg-transparent border-transparent'
    ]"
  >
    <div class="text-xl font-bold tracking-widest text-white">
      JOMVINH<span style="color: transparent ; -webkit-text-stroke:1px #d4a853 ;">KH</span>
    </div>

    <nav class="hidden space-x-8 md:flex">
      <router-link to="/" class="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Home</router-link>
      <router-link to="/view" class="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Views</router-link>
      <router-link to="/contact" class="text-sm font-medium text-white/70 hover:text-white transition-colors duration-300">Contact</router-link>
    </nav>

    <button class="hidden md:block px-5 py-2.5 text-sm font-medium bg-white text-neutral-900 hover:bg-neutral-200 transition-all duration-300">
      Contact Us
    </button>

    <button @click="menuOpen = !menuOpen" class="md:hidden relative z-50 size-6 flex flex-col items-center justify-center gap-1.5">
      <span :class="['block h-0.5 w-5 rounded bg-white transition-all duration-300', menuOpen ? 'translate-y-2 rotate-45' : '']" />
      <span :class="['block h-0.5 w-5 rounded bg-white transition-all duration-300', menuOpen ? 'opacity-0' : '']" />
      <span :class="['block h-0.5 w-5 rounded bg-white transition-all duration-300', menuOpen ? '-translate-y-2 -rotate-45' : '']" />
    </button>
  </header>

  <div
    v-show="menuOpen"
    class="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-neutral-900 md:hidden"
  >
    <router-link to="/" @click="menuOpen = false" class="text-2xl font-medium text-white hover:text-white/70 transition-colors">Home</router-link>
    <router-link to="/view" @click="menuOpen = false" class="text-2xl font-medium text-white hover:text-white/70 transition-colors">Views</router-link>
    <router-link to="/contact" @click="menuOpen = false" class="text-2xl font-medium text-white hover:text-white/70 transition-colors">Contact</router-link>
    <button class="mt-4 px-6 py-3 text-base font-medium bg-white text-neutral-900 hover:bg-neutral-200 transition-all duration-300">
      Contact Us
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 0
}

function handleResize() {
  if (window.innerWidth >= 768) menuOpen.value = false
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
})
</script>
