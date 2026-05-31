<template>
  <section class="province-profile-section">
    <div class="profile-layout" v-if="province">
      <div class="province-main-card">
        <div class="main-image-wrapper">
          <img :src="province.image" :alt="province.name" class="main-image" />
        </div>

        <div class="main-content">
          <div class="meta-row">
            <span>{{ province.type.toUpperCase() }}: {{ province.capital.toUpperCase() }}</span>
          </div>

          <h3 class="province-display-name">{{ province.name.toUpperCase() }}</h3>
          <div class="accent-line"></div>

          <div class="stats-row">
            <div class="stat-chip">
              <span class="stat-chip-value">{{ province.area_km2.toLocaleString() }}</span>
              <span class="stat-chip-label">km²</span>
            </div>
            <div class="stat-chip">
              <span class="stat-chip-value">{{ province.population.toLocaleString() }}</span>
              <span class="stat-chip-label">Population</span>
            </div>
          </div>

          <p class="province-description">{{ province.des }}</p>
        </div>
      </div>

      <div class="top-places-container">
        <div class="container-title-row">
          <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <h4 class="sub-section-heading">TOP PLACES</h4>
        </div>

        <div class="sub-places-grid">
          <div v-for="(place, i) in province.top_place" :key="place.id" class="sub-place-card">
            <div class="sub-card-img-wrapper">
              <img :src="place.image" :alt="place.name" class="sub-card-img" />
              <div class="sub-card-index">{{ String(i + 1).padStart(2, '0') }}</div>
            </div>
            <div class="sub-card-info">
              <h5 class="sub-card-title">{{ place.name.toUpperCase() }}</h5>
              <p class="sub-card-description">{{ place.des }}</p>
            </div>
          </div>
        </div>

        <router-link to="/view" class="back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          <span>ALL PROVINCES</span>
        </router-link>
      </div>
    </div>

    <div class="loading-state" v-else>
      <span>Loading...</span>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import provinces from '../../../storages/provinces'

const route = useRoute()

const province = computed(() => {
  const id = Number(route.params.id)
  return provinces.find(p => p.id === id) || null
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500&display=swap');

.province-profile-section {
  background: #080808;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  padding: 6rem 2rem;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100vh;
}

.profile-layout {
  display: grid;
  grid-template-columns: 4.5fr 7.5fr;
  gap: 3.5rem;
  align-items: start;
  max-width: 1400px;
  margin: 0 auto;
}

.province-main-card {
  background: #111111;
  border: 1px solid rgba(245, 240, 232, 0.06);
  position: sticky;
  top: 2rem;
}

.main-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-content {
  padding: 2rem;
  cursor: default;
}

.meta-row {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: rgba(245, 240, 232, 0.4);
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.province-display-name {
  font-size: 2.8rem;
  letter-spacing: 0.02em;
  margin: 0 0 0.75rem;
  color: #f5f0e8;
}

.accent-line {
  width: 40px;
  height: 3px;
  background: #d4a853;
  margin-bottom: 1.25rem;
}

.stats-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.stat-chip {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
}

.stat-chip-value {
  font-size: 1.4rem;
  color: #d4a853;
  letter-spacing: 0.02em;
}

.stat-chip-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  color: rgba(245, 240, 232, 0.35);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.province-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  font-weight: 300;
  color: rgba(245, 240, 232, 0.75);
  margin: 0;
}

.top-places-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.container-title-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border-bottom: 1px solid rgba(245, 240, 232, 0.1);
  padding-bottom: 0.75rem;
}

.star-icon {
  width: 18px;
  height: 18px;
  color: #d4a853;
}

.sub-section-heading {
  font-size: 1.4rem;
  letter-spacing: 0.06em;
  margin: 0;
  color: rgba(245, 240, 232, 0.9);
}

.sub-places-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sub-place-card {
  display: flex;
  background: #111111;
  border-left: 3px solid rgba(212, 168, 83, 0.2);
  border-top: 1px solid rgba(245, 240, 232, 0.03);
  border-right: 1px solid rgba(245, 240, 232, 0.03);
  border-bottom: 1px solid rgba(245, 240, 232, 0.03);
  transition: all 0.3s ease;
}

.sub-place-card:hover {
  border-left-color: #d4a853;
  background: #161616;
  transform: translateX(4px);
}

.sub-card-img-wrapper {
  position: relative;
  width: 180px;
  min-width: 180px;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.sub-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sub-card-index {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: #080808;
  color: #f5f0e8;
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
}

.sub-card-info {
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: default;
}

.sub-card-title {
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  margin: 0 0 0.6rem;
  color: #f5f0e8;
}

.sub-card-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  line-height: 1.45;
  font-weight: 300;
  color: rgba(245, 240, 232, 0.6);
  margin: 0;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(245, 240, 232, 0.4);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color 0.2s;
  margin-top: 0.5rem;
  align-self: flex-start;
}

.back-link:hover {
  color: #d4a853;
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: rgba(245, 240, 232, 0.4);
  letter-spacing: 0.1em;
}

@media (max-width: 1024px) {
  .profile-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .province-main-card {
    position: static;
  }
}

@media (max-width: 680px) {
  .province-profile-section {
    padding: 5.5rem 1.25rem 4rem;
  }
  .sub-place-card {
    flex-direction: column;
  }
  .sub-card-img-wrapper {
    width: 100%;
    aspect-ratio: 16/9;
  }
}
</style>
