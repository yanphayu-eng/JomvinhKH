<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-header">
        <span class="section-label">GET IN TOUCH</span>
        <h2 class="section-title">
          <span class="title-line">CONTACT</span>
          <span class="title-line gold">US</span>
        </h2>
        <div class="title-divider"></div>
        <p class="section-desc">
          Have questions about Cambodia's provinces, travel recommendations, or want to contribute? We'd love to hear from you.
        </p>
      </div>

      <div class="contact-grid">
        <div class="contact-info-panel">
          <div class="info-card">
            <div class="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="info-detail">
              <span class="info-label">Address</span>
              <span class="info-value">#123, Preah Trasak Paem St, Phnom Penh, Cambodia</span>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div class="info-detail">
              <span class="info-label">Phone</span>
              <span class="info-value">+855 882 376 158</span>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="info-detail">
              <span class="info-label">Email</span>
              <span class="info-value">jomvinhkh@gamil.com</span>
            </div>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="info-detail">
              <span class="info-label">Hours</span>
              <span class="info-value">Mon — Sun: 12:00 AM — 12:00 AM</span>
              <span class="info-clock">{{ currentTime }}</span>
            </div>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="name">Your Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                placeholder="John Doe"
                class="form-input"
                required
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="email">Your Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                placeholder="john@example.com"
                class="form-input"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="6"
              placeholder="Tell us more about your inquiry..."
              class="form-input form-textarea"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-btn" :disabled="sending">
            <span class="submit-inner">
              <span>{{ sending ? 'SENDING...' : 'SEND MESSAGE' }}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </span>
          </button>

          <p v-if="submitted" class="success-message">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </p>
          <p v-if="errorMsg" class="error-message">{{ errorMsg }}</p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'

const WEB3FORMS_KEY = 'fd54f61c-5ac2-41cb-8b70-ce69852bb62a'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)
const sending = ref(false)
const errorMsg = ref('')
const currentTime = ref('')

let timeInterval

function updateTime() {
  const now = new Date()
  const options = {
    timeZone: 'Asia/Phnom_Penh',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }
  currentTime.value = new Intl.DateTimeFormat('en-US', options).format(now)
}

onMounted(() => {
  updateTime()
  timeInterval = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timeInterval)
})

async function handleSubmit() {
  sending.value = true
  errorMsg.value = ''
  submitted.value = false

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        message: form.message
      })
    })

    const data = await res.json()

    if (!data.success) throw new Error(data.message || 'Failed to send')

    submitted.value = true
    form.name = ''
    form.email = ''
    form.message = ''
    setTimeout(() => { submitted.value = false }, 6000)
  } catch {
    errorMsg.value = 'Something went wrong. Please try again later or email us at yanphayu@gmail.com.'
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap');

.contact-section {
  position: relative;
  width: 100%;
  background: #080808;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  overflow: hidden;
  padding: clamp(5rem, 6vw, 6rem) clamp(1rem, 3vw, 2rem);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.contact-header {
  text-align: center;
  margin-bottom: clamp(2.5rem, 4vw, 4rem);
}

.section-label {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.65rem, 1.2vw, 0.8rem);
  font-weight: 600;
  letter-spacing: 0.25em;
  color: #d4a853;
  display: block;
  margin-bottom: 0.75rem;
}

.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15em;
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 0.9;
  letter-spacing: 0.03em;
}

.title-line {
  color: #f5f0e8;
}

.title-line.gold {
  color: #d4a853;
}

.title-divider {
  width: clamp(50px, 6vw, 70px);
  height: 3px;
  background: #d4a853;
  margin: clamp(0.75rem, 1.5vw, 1.25rem) auto;
}

.section-desc {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.85rem, 1.1vw, 1rem);
  line-height: 1.6;
  font-weight: 300;
  color: rgba(245, 240, 232, 0.55);
  max-width: 520px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: start;
}

.contact-info-panel {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: #111111;
  border: 1px solid rgba(245, 240, 232, 0.05);
  transition: border-color 0.3s ease;
}

.info-card:hover {
  border-color: rgba(212, 168, 83, 0.2);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: rgba(212, 168, 83, 0.1);
  color: #d4a853;
}

.info-detail {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.info-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.3);
}

.info-value {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: rgba(245, 240, 232, 0.75);
  line-height: 1.4;
}

.info-clock {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #d4a853;
  letter-spacing: 0.05em;
  margin-top: 0.1rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.4);
}

.form-input {
  width: 100%;
  padding: 0.85rem 1rem;
  background: #111111;
  border: 1px solid rgba(245, 240, 232, 0.08);
  color: #f5f0e8;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  outline: none;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: rgba(212, 168, 83, 0.4);
}

.form-input::placeholder {
  color: rgba(245, 240, 232, 0.15);
  font-weight: 300;
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: transparent;
  border: 1px solid rgba(212, 168, 83, 0.3);
  color: #d4a853;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.12em;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  align-self: flex-start;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.submit-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #d4a853;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 0;
}

.submit-btn:hover::before {
  transform: scaleX(1);
}

.submit-btn:hover {
  border-color: #d4a853;
  color: #080808;
}

.submit-inner {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
}

.success-message {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: #d4a853;
  margin: 0;
  animation: fadeIn 0.3s ease;
}

.error-message {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  color: #e74c3c;
  margin: 0;
  animation: fadeIn 0.3s ease;
}

.submit-btn:disabled {
  opacity: 0.5;
  pointer-events: none;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .contact-info-panel {
    order: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .contact-form {
    order: 1;
  }

  .info-card {
    padding: 1rem;
  }
}

@media (max-width: 640px) {
  .contact-section {
    padding: 5rem 1.25rem 3rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-info-panel {
    grid-template-columns: 1fr;
  }

  .submit-btn {
    width: 100%;
    justify-content: center;
  }

  .submit-inner {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 380px) {
  .contact-section {
    padding: 4.5rem 1rem 2rem;
  }

  .info-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>
