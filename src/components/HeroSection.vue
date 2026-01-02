<template>
  <v-container id="profileSection" class="hero-wrapper px-0" fluid>
    <v-row no-gutters align="center" class="min-vh-80">
      
      <v-col cols="12" md="7" class="hero-content-col pa-8 pa-md-16 z-index-2">
        <div class="reveal-content">
          <div class="text-overline text-primary mb-6 tracking-widest font-weight-bold">
            AVAILABLE FOR PROJECTS — 2026
          </div>
          
          <h1 class="hero-name mb-4">
            {{ profile.name }}
          </h1>
          
          <h2 class="hero-role text-h3 font-weight-light mb-8 italic-serif">
            {{ profile.role }}
          </h2>

          <div class="max-w-md">
            <p class="text-h6 font-weight-regular text-slate-500 leading-relaxed mb-10">
              {{ profile.content || "Transforming complex ideas into refined digital experiences through strategic design and code." }}
            </p>
          </div>

          <div class="d-flex align-center gap-4">
            <v-btn
              v-if="profile.github"
              :href="profile.github"
              target="_blank"
              variant="outlined"
              icon="mdi-github"
              size="large"
              class="social-btn"
            ></v-btn>
            
            <v-btn
              v-if="profile.linkedin"
              :href="profile.linkedin"
              target="_blank"
              variant="outlined"
              icon="mdi-linkedin"
              size="large"
              class="social-btn"
            ></v-btn>

            <v-divider vertical class="mx-4 my-auto h-8 opacity-20"></v-divider>

            <v-btn 
              variant="text" 
              class="explore-btn font-weight-bold"
              @click="scrollTo('projectSection')"
            >
              VIEW PROJECTS
              <v-icon end icon="mdi-arrow-down-right" class="ml-2"></v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="5" class="relative z-index-1 mt-12 mt-md-0">
        <v-hover v-slot="{ isHovering, props }">
          <div v-bind="props" class="image-canvas mx-auto mx-md-0">
            <div class="decorative-box"></div>
            
            <v-img
              :src="profile.imageUrl"
              alt="Profile"
              cover
              class="hero-image elevation-24"
              :class="{ 'grayscale-off': isHovering }"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
        </v-hover>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.hero-wrapper {
  position: relative;
  overflow: visible;
}

.min-vh-80 {
  min-height: 80vh;
}

.hero-name {
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  line-height: 0.9;
  font-weight: 950;
  letter-spacing: -4px;
  color: #0f172a;
}

.italic-serif {
  font-family: 'Playfair Display', serif; /* Or any serif system font */
  font-style: italic;
  color: #64748b;
}

.image-canvas {
  position: relative;
  width: 85%;
  max-width: 450px;
  aspect-ratio: 4/5;
}

.hero-image {
  width: 100%;
  height: 100%;
  border-radius: 4px; /* Editorial style usually looks better with sharp or slight rounds */
  filter: grayscale(100%);
  transition: filter 0.6s ease, transform 0.6s ease;
  z-index: 2;
  
  &.grayscale-off {
    filter: grayscale(0%);
    transform: scale(1.02);
  }
}

.decorative-box {
  position: absolute;
  top: 20px;
  left: 20px;
  right: -20px;
  bottom: -20px;
  border: 1px solid rgba(var(--v-theme-primary), 0.3);
  z-index: 0;
  border-radius: 4px;
}

.social-btn {
  border-color: rgba(0,0,0,0.1) !important;
  transition: all 0.3s ease;
  
  &:hover {
    background: #0f172a !important;
    color: white !important;
  }
}

.explore-btn {
  letter-spacing: 2px;
  font-size: 0.75rem;
  
  &:hover {
    padding-left: 15px;
    background: transparent !important;
  }
}

.z-index-2 { z-index: 2; }
.z-index-1 { z-index: 1; }
.gap-4 { gap: 16px; }

/* Entering Animation */
.reveal-content {
  animation: revealUp 1s cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

<script>
export default {
  props: ["profile"],
};
</script>
