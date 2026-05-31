<template>
  <section class="hero-section">
    <div class="video-wrapper">
      <video ref="videoRef" class="hero-video" autoplay muted loop playsinline>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div class="overlay" />
      <div class="grain" />
    </div>

    <div class="hero-content" :class="{ visible: mounted }">
      <h1 class="hero-headline">
        <span class="welcome-line">
          Welcome to
        </span>
        <div class="brand-title">
          JOMVINH<span class="stroke-line">KH</span>      
        </div>
      </h1>

      <div class="hero-divider"></div>
    </div>

    <button class="btn" :class="{ visible: mounted }">
      <span>View All</span>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const videoRef = ref(null)
const mounted = ref(false)

onMounted(() => {
  setTimeout(() => { mounted.value = true }, 50)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.hero-section {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background: #080808;
  font-family: 'Bebas Neue', sans-serif; 
  color: #f5f0e8;
}

.video-wrapper {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
}
.overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, #080808 0%, transparent 40%),
    linear-gradient(to right, #080808 0%, transparent 30%),
    linear-gradient(160deg, rgba(8,8,8,0.5) 0%, transparent 60%);
}
.grain {
  position: absolute;
  inset: -50%;
  width: 200%;
  height: 200%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.035;
  pointer-events: none;
  animation: grain-move 0.5s steps(2) infinite;
}
@keyframes grain-move {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-1%, 1%); }
  50%  { transform: translate(1%, -1%); }
  75%  { transform: translate(-1%, -1%); }
  100% { transform: translate(1%, 1%); }
}

.hero-content {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  text-align: center;
  padding: 0 1.5rem 4rem;
  cursor: pointer;

  opacity: 0;
  transform: translateY(25px);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1),
              transform 1s cubic-bezier(0.16, 1, 0.3, 1);
}
.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-headline {
  background: transparent !important;
  background-color: transparent !important;
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(60px, 15vw, 180px);
  line-height: 0.85;
  letter-spacing: 0.03em;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome-line {
  font-size: clamp(1.5rem, 4vw, 3rem);
  font-weight: 400;
  color: #d4a853;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.brand-title {
  background: transparent !important;
  background-color: transparent !important;
}

.stroke-line {
  background: transparent !important;
  color: transparent !important;
  -webkit-text-fill-color: transparent !important; 
  -webkit-text-stroke: 2px #d4a853;
  margin-left: 0.02em;
}


.hero-divider {
  width: 120px; 
  height: 3px;
  background: #d4a853;
  margin-bottom: 1.5rem;
  transform: scaleX(0);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s;
}
.hero-content.visible .hero-divider {
  transform: scaleX(1);
}

.hero-sub {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  font-weight: 400;
  color: rgba(245, 240, 232, 0.75);
  letter-spacing: 0.06em;
  line-height: 1.5;
  max-width: 600px;
  margin: 0;
}

.btn {
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%) translateY(10px); /* Perfectly center matches UI layout flow */
  z-index: 10;
  display: inline-flex;
  align-items: center;
  padding: 0.85rem 2.2rem;
  background: transparent;
  border: 1px solid rgba(245, 240, 232, 0.3);
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.6s ease 0.4s, 
              transform 0.6s ease 0.4s,
              border-color 0.25s, 
              color 0.25s;
}
.btn.visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.btn span {
  position: relative;
  z-index: 1;
}
.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #d4a853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 0;
}
.btn:hover::before { transform: scaleX(1); }
.btn:hover {
  border-color: #d4a853;
  color: #080808;
}

</style>