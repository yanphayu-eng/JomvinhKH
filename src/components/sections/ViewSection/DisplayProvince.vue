<template>
  <div class="scroll-section-wrapper">
    <section 
      v-for="(prov, i) in provincesList" 
      :key="prov.id" 
      class="reveal-section" 
      :ref="el => { if (el) sectionRefs[i] = el }"
    >
      <div class="section-inner layout-left" :class="{ 'layout-reverse': i % 2 !== 0 }">
        
        <div class="image-block" :class="{ popped: visibilityStates[i] }">
          <div class="img-frame">
            <img :src="prov.image" :alt="prov.name" />
            <div class="img-caption">
              <span>{{ prov.name }}, Cambodia</span>
            </div>
          </div>
        </div>

        <div class="text-block">
          <h2 class="text-headline">
            <span class="word-reveal" :class="{ popped: visibilityStates[i] }" style="transition-delay:0.1s">
              {{ prov.name.split(' ')[0].toUpperCase() }}
            </span>
            <span v-if="prov.name.split(' ')[1]" class="word-reveal accent-stroke" :class="{ popped: visibilityStates[i] }" style="transition-delay:0.18s">
              {{ prov.name.split(' ').slice(1).join(' ').toUpperCase() }}
            </span>
            <span v-else class="word-reveal accent-stroke" :class="{ popped: visibilityStates[i] }" style="transition-delay:0.18s">
              {{ prov.type.toUpperCase() }}
            </span>
          </h2>
          
          <p class="text-body" :class="{ popped: visibilityStates[i] }" style="transition-delay:0.28s">
            {{ prov.des || `Welcome to ${prov.name}. A beautiful ${prov.type.toLowerCase()} of Cambodia with an area of ${prov.area_km2} km² and a proud community of over ${prov.population.toLocaleString()} residents.` }}
          </p>
          
          <button class="explore-btn" :class="{ popped: visibilityStates[i] }" style="transition-delay:0.4s">
            <span>Explore Story</span>
          </button>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import provinces from '../../../storages/provinces'

const provincesList = ref(provinces)
const sectionRefs = ref([])
const visibilityStates = ref(new Array(provinces.length).fill(false))
let observer

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      
      const index = sectionRefs.value.indexOf(entry.target)
      if (index !== -1) {
        visibilityStates.value[index] = true
      }
    })
  }, { threshold: 0.15 })


  sectionRefs.value.forEach(el => {
    if (el) observer.observe(el)
  })
})

onBeforeUnmount(() => { 
  observer?.disconnect() 
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.scroll-section-wrapper {
  background: #080808;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  overflow-x: hidden;
}

.popped {
  opacity: 1 !important;
  transform: none !important;
}

.reveal-section {
  padding: 8rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-inner {
  display: grid;
  gap: 5rem;
  align-items: center;
}

.layout-left {
  grid-template-columns: 1fr 1fr;
}
.layout-reverse > .image-block {
  order: 2;
  transform: translateX(40px) scale(0.97); 
}
.layout-reverse > .text-block {
  order: 1;
}

.image-block {
  position: relative;
  opacity: 0;
  transform: translateX(-40px) scale(0.97);
  transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.img-frame {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/5;
  cursor: zoom-in;
}

.img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.image-block.popped .img-frame img {
  transform: scale(1.04);
}

.img-frame:hover img {
  transform: scale(1.1) !important;
}

.img-caption {
  position: absolute;
  bottom: 1.25rem;
  left: 1.25rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.7);
  background: rgba(8, 8, 8, 0.6);
  backdrop-filter: blur(8px);
  padding: 0.4rem 0.8rem;
}

.text-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: default; 
}

.text-headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 0.95;
  letter-spacing: 0.02em;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.word-reveal {
  display: block;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.accent-stroke {
  color: transparent;
  -webkit-text-stroke: 1.5px #d4a853;
  padding-left: 2.5rem;
}

.text-body {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  color: rgba(245, 240, 232, 0.65);
  letter-spacing: 0.05em;
  margin: 0;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.explore-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.8rem 2.25rem;
  border: 1px solid rgba(245, 240, 232, 0.25);
  background: transparent;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  width: fit-content;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 0.3s ease, transform 0.3s ease,
    border-color 0.2s, color 0.2s;
}

.explore-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #d4a853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
  z-index: 0;
}

.explore-btn span {
  position: relative;
  z-index: 1;
}

.explore-btn:hover::before {
  transform: scaleX(1);
}

.explore-btn:hover {
  border-color: #d4a853;
  color: #080808;
}

@media (max-width: 900px) {
  .reveal-section {
    padding: 5rem 1.75rem;
  }

  .layout-left, .layout-reverse {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }

  .layout-reverse > .image-block {
    order: -1; 
  }
  .image-block {
    order: -1;
  }
  
  .accent-stroke {
    padding-left: 0rem; 
  }
}
</style>