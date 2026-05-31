<template>
  <section class="province-profile-section">
    <div class="profile-layout">
      
      <div class="province-main-card">
        <div class="main-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1573780845562-79f1a1165383?q=80&w=1191&auto=format&fit=crop" 
            alt="Phnom Penh" 
            class="main-image"
          />
        </div>
        
        <div class="main-content">
          <div class="meta-row">
            <span>CAPITAL: PHNOM PENH</span>
          </div>
          
          <h3 class="province-display-name">PHNOM PENH</h3>
          <div class="accent-line"></div>
          
          <p class="province-description">
            Phnom Penh is the vibrant capital and most populous city of Cambodia. Located at the confluence of the Mekong, Tonle Sap, and Bassac rivers, it serves as the nation's political, economic, and cultural hub. Once known as the 'Pearl of Asia', the city blends traditional Khmer architecture with French colonial remnants and rapidly growing modern skyscrapers.
          </p>
        </div>
      </div>

      <div class="top-places-container">
        <div class="container-title-row">
          <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <h4 class="sub-section-heading">TOP 3 PLACES </h4>
        </div>

        <div class="sub-places-grid">
          
          <div class="sub-place-card">
            <div class="sub-card-img-wrapper">
              <img src="https://images.unsplash.com/photo-1694782981192-3b758e46d996?q=80&w=1074&auto=format&fit=crop" alt="Tuol Sleng" class="sub-card-img" />
              <div class="sub-card-index">01</div>
            </div>
            <div class="sub-card-info">
              <h5 class="sub-card-title">TUOL SLENG GENOCIDE MUSEUM</h5>
              <p class="sub-card-tag">HISTORICAL LANDMARK</p>
              <p class="sub-card-description">Formerly a high school, this site was converted into Security Prison 21 (S-21) by the Khmer Rouge regime. Today, it stands as a deeply moving and sobering museum preserving photographic evidence and historical artifacts.</p>
            </div>
          </div>

          <div class="sub-place-card">
            <div class="sub-card-img-wrapper">
              <img src="https://images.unsplash.com/photo-1707817501904-2e5448d88b99?q=80&w=1170&auto=format&fit=crop" alt="Royal Palace" class="sub-card-img" />
              <div class="sub-card-index">02</div>
            </div>
            <div class="sub-card-info">
              <h5 class="sub-card-title">THE ROYAL PALACE & SILVER PAGODA</h5>
              <p class="sub-card-tag">ROYAL HERITAGE</p>
              <p class="sub-card-description">Built in the 1860s, this majestic architectural complex serves as the official residence of the King. The neighboring Silver Pagoda is famous for its gleaming floor covered with over 5,000 solid silver tiles.</p>
            </div>
          </div>

          <div class="sub-place-card">
            <div class="sub-card-img-wrapper">
              <img src="https://images.unsplash.com/photo-1706583733600-08e942012484?q=80&w=1074&auto=format&fit=crop" alt="National Museum" class="sub-card-img" />
              <div class="sub-card-index">03</div>
            </div>
            <div class="sub-card-info">
              <h5 class="sub-card-title">THE NATIONAL MUSEUM OF CAMBODIA</h5>
              <p class="sub-card-tag">CULTURAL ARCHIVE</p>
              <p class="sub-card-description">This iconic terracotta building represents the finest of traditional Khmer design. It houses the world's largest collection of cultural artifacts, ancient sculptures, and bronzes from the Khmer Empire.</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500&display=swap');

.province-profile-section {
  background: #080808;
  color: #f5f0e8;
  font-family: 'Bebas Neue', sans-serif;
  padding: 6rem 2rem;
  max-width: 100%;
  margin: 0 auto;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  color: #f5f0e8;
}

.title-divider {
  width: 60px;
  height: 2px;
  background: #d4a853;
  margin-bottom: 1.5rem;
}

.section-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: #d4a853;
  margin: 0 0 0.5rem;
}

.profile-layout {
  display: grid;
  grid-template-columns: 4.5fr 7.5fr;
  gap: 3.5rem;
  align-items: start;
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

.province-type-badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: #d4a853;
  color: #080808;
  font-size: 0.9rem;
  padding: 0.2rem 0.6rem;
  letter-spacing: 0.05em;
  font-weight: bold;
}

.main-content {
  padding: 2rem;
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

.meta-dot {
  color: #d4a853;
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
}

.sub-card-title {
  font-size: 1.5rem;
  letter-spacing: 0.03em;
  margin: 0 0 0.2rem;
  color: #f5f0e8;
}

.sub-card-tag {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #d4a853;
  letter-spacing: 0.05em;
  margin: 0 0 0.6rem 0;
}

.sub-card-description {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  line-height: 1.45;
  font-weight: 300;
  color: rgba(245, 240, 232, 0.6);
  margin: 0;
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
    padding: 4rem 1.25rem;
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