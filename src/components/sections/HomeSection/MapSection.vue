<template>
  <section class="explore-section">
    <div class="explore-inner">
      <div class="explore-visual">
        <div class="map-frame">
          <img class="map-silhouette" src="/map.svg" alt="Map of Cambodia" />
        </div>
        <div class="region-tag top-right">SIEM REAP</div>
        <div class="region-tag bottom-left">PHNOM PENH</div>
        <div class="region-tag bottom-right">SIHANOUKVILLE</div>
      </div>

      <div class="explore-content">
        <span class="pre-heading">WAYFINDER</span>
        <h2 class="main-heading">CAMBODIA</h2>
        <div class="heading-underline"></div>
        <p class="content-desc">
          A kingdom where ancient temples emerge from jungle mist, where rivers converge
          in bustling capitals, and where coastlines stretch along turquoise waters.
          Spanning 25 provinces across 181,035 km², every corner holds a new story.
        </p>

        <div class="stat-grid">
          <div class="stat-card">
            <span class="stat-number">25</span>
            <span class="stat-label">Provinces</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">26</span>
            <span class="stat-label">Municipalities</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">443</span>
            <span class="stat-label">km Coastline</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">16M</span>
            <span class="stat-label">Population</span>
          </div>
        </div>

        <router-link to="/view" class="explore-cta">
          <span class="cta-inner">
            <span class="cta-text">VIEWS ALL</span>
            <span class="cta-arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');

.explore-section {
  position: relative;
  width: 100%;
  background: #080808;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  overflow: hidden;
}

.explore-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
}

.explore-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  overflow: hidden;
  grid-column: 2;
}

.explore-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 4rem 4rem 2rem;
  grid-column: 1;
  grid-row: 1;
}

.map-frame {
  position: relative;
  width: 100%;
  max-width: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1200px) {
  .map-frame {
    max-width: 700px;
  }
}

.map-silhouette {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 0 60px rgba(212, 168, 83, 0.08));
  position: relative;
  z-index: 1;
}

.region-tag {
  position: absolute;
  font-family: 'Inter', sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.25);
  pointer-events: none;
  z-index: 2;
}

.region-tag.top-right {
  top: 22%;
  right: 10%;
}

.region-tag.bottom-left {
  bottom: 28%;
  left: 10%;
}

.region-tag.bottom-right {
  bottom: 20%;
  right: 8%;
}

.pre-heading {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  color: #d4a853;
  margin-bottom: 0.75rem;
}

.main-heading {
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 0.85;
  letter-spacing: 0.02em;
  color: #f5f0e8;
  margin: 0;
}

.heading-underline {
  width: 80px;
  height: 3px;
  background: #d4a853;
  margin: 1.5rem 0;
}

.content-desc {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.9rem, 1.1vw, 1.05rem);
  line-height: 1.7;
  font-weight: 300;
  color: rgba(245, 240, 232, 0.55);
  max-width: 480px;
  margin: 0 0 2.5rem;
}

.stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
  max-width: 400px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(245, 240, 232, 0.06);
}

.stat-number {
  font-size: 1.6rem;
  letter-spacing: 0.02em;
  color: #d4a853;
  line-height: 1;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.3);
}

.explore-cta {
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: transparent;
  border: 1px solid rgba(212, 168, 83, 0.3);
  color: #d4a853;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  align-self: flex-start;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.explore-cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #d4a853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 0;
}

.explore-cta:hover::before {
  transform: scaleX(1);
}

.explore-cta:hover {
  border-color: #d4a853;
  color: #080808;
}

.cta-inner {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 2rem;
}

.cta-arrow {
  display: flex;
  transition: transform 0.3s ease;
}

.explore-cta:hover .cta-arrow {
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .explore-inner {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .explore-visual {
    padding: 3rem 3rem 1.5rem;
    grid-column: 1;
  }

  .explore-content {
    grid-column: 1;
    grid-row: auto;
  }

  .map-frame {
    max-width: 400px;
  }

  .region-tag {
    display: none;
  }

  .explore-content {
    padding: 1.5rem 3rem 3rem;
    align-items: center;
    text-align: center;
  }

  .heading-underline {
    margin: 1.5rem auto;
  }

  .content-desc {
    max-width: 520px;
    margin: 0 auto 2.5rem;
  }

  .stat-grid {
    max-width: 360px;
    margin: 0 auto 2.5rem;
  }

  .explore-cta {
    align-self: center;
  }
}

@media (max-width: 640px) {
  .explore-visual {
    padding: 2rem 1.5rem 1rem;
  }

  .map-frame {
    max-width: 280px;
  }

  .explore-content {
    padding: 1rem 1.5rem 2.5rem;
  }

  .main-heading {
    font-size: 3rem;
  }

  .stat-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    max-width: 300px;
  }

  .stat-number {
    font-size: 1.3rem;
  }

  .explore-cta {
    width: 100%;
    justify-content: center;
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 380px) {
  .explore-visual {
    padding: 1.5rem 1rem 1rem;
  }

  .map-frame {
    max-width: 200px;
  }

  .explore-content {
    padding: 0.75rem 1rem 2rem;
  }

  .main-heading {
    font-size: 2.4rem;
  }

  .pre-heading {
    font-size: 0.65rem;
  }

  .heading-underline {
    width: 50px;
    margin: 1rem auto;
  }

  .content-desc {
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
  }

  .stat-grid {
    gap: 0.5rem;
    max-width: 240px;
  }

  .stat-card {
    padding: 0.5rem 0;
  }

  .stat-number {
    font-size: 1.1rem;
  }

  .stat-label {
    font-size: 0.6rem;
  }

  .explore-cta {
    font-size: 0.85rem;
    padding: 0.65rem 1.25rem;
  }
}
</style>
