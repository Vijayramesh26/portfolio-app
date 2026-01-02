<template>
  <v-app class="editorial-theme">
    <v-progress-linear
      fixed
      top
      height="4"
      color="primary"
      :model-value="scrollProgress"
      style="z-index: 100"
    ></v-progress-linear>

    <Navbar v-if="portfolio" :profile="portfolio.profile" />

    <v-main>
      <v-fade-transition mode="out-in">
        <div v-if="loading" key="loading" class="loader-wrapper">
          <div class="reveal-text">
            <span class="text-h2 font-weight-black">CREATING.</span>
          </div>
        </div>

        <div v-else-if="portfolio" key="content">
          
          <v-container fluid class="pa-0">
            <v-row no-gutters>
              <v-col cols="12" md="4" class="sticky-sidebar d-none d-md-flex">
                <div class="sidebar-content pa-12">
                  <v-avatar size="120" class="mb-6 elevation-10">
                    <v-img :src="portfolio.profile.image"></v-img>
                  </v-avatar>
                  <h1 class="text-h3 font-weight-black mb-2">{{ portfolio.profile.name }}</h1>
                  <p class="text-subtitle-1 text-primary font-weight-bold uppercase tracking-widest">
                    {{ portfolio.profile.role }}
                  </p>
                  <v-divider class="my-8" width="50"></v-divider>
                  <div class="social-links">
                    <v-btn icon="mdi-github" variant="text"></v-btn>
                    <v-btn icon="mdi-linkedin" variant="text"></v-btn>
                  </div>
                </div>
              </v-col>

              <v-col cols="12" md="8" class="content-scroll">
                
                <section class="hero-canvas" v-if="portfolio.profile?.enabled" >
                   <HeroSection :profile="portfolio.profile.data" />
                </section>

                <div class="px-6 px-md-16">
                  
                  <v-card variant="flat" v-if="portfolio.about?.enabled" class="section-card about-offset pa-8 pa-md-16">
                    <AboutSection :about="portfolio.about.data" />
                  </v-card>

                  <section class="py-16" v-if="portfolio.skills?.enabled">
                    <!-- <div class="text-overline mb-4 text-primary">Capabilities</div> -->
                    <SkillsSection :skills="portfolio.skills.data" />
                  </section>

                  <section class="py-16" v-if="portfolio.projects?.enabled">
                     <!-- <div class="d-flex align-center mb-10">
                        <h2 class="text-h2 font-weight-black">Selected Works</h2>
                        <v-spacer></v-spacer>
                        <span class="text-h6 font-weight-light text-grey">04 — 08</span>
                     </div> -->
                     <ProjectsSection :projects="portfolio.projects.data" />
                  </section>

                  <section class="py-16" v-if="portfolio.experience?.enabled">
                    <ExperienceSection :experiences="portfolio.experience.data" />
                  </section>

                  <v-card v-if="portfolio.contact?.enabled" color="grey-darken-4" theme="dark" class="pa-12 rounded-xl text-center my-16">
                    <ContactSection :contact="portfolio.contact.data" />
                  </v-card>

                </div>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-fade-transition>
    </v-main>

    <Footer v-if="portfolio" />
  </v-app>
</template>

<script>
import axios from "axios";

import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "Portfolio",

  components: {
    Navbar,
    Footer,
    HeroSection,
    AboutSection,
    SkillsSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection,
  },

  data() {
    return {
      portfolio: null,
      loading: true,
      error: false,
      sections: [
        "profileSection",
        "aboutSection",
        "skillsSection",
        "projectSection",
        "experienceSection",
        "contactSection",
      ],
    };
  },

  watch: {
    "$route.params.username": {
      immediate: true,
      handler(username) {
        this.fetchPortfolio(username);
      },
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  methods: {
    updateScroll() {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollProgress = (window.scrollY / height) * 100;
    },
    async fetchPortfolio(username) {
      this.loading = true;
      this.error = false;
      this.portfolio = null;

      try {
        const res = await axios.get(
          `https://backend-9cax.onrender.com/api/portfolio/${username}`
        );

        this.portfolio = res.data;

        // SEO
        document.title = `${res.data.profile?.name || "Portfolio"} | Portfolio`;

      } catch (err) {
        console.error("Portfolio fetch error:", err);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
/* 1. TYPOGRAPHY & OVERALL FEEL */
.editorial-theme {
  background-color: #fafafa !important;
  color: #1a1a1a;
  font-family: 'Inter', sans-serif;
}

/* 2. STICKY SIDEBAR LOGIC */
.sticky-sidebar {
  height: 100vh;
  position: sticky;
  top: 0;
  background: white;
  border-right: 1px solid #eeeeee;
  align-items: center;
}

/* 3. UNIQUE OVERLAPPING EFFECT */
.about-offset {
  margin-top: -100px; /* Pulls the about card up over the hero */
  z-index: 2;
  border-radius: 24px !important;
  box-shadow: 0 30px 60px rgba(0,0,0,0.05) !important;
}

/* 4. ANIMATED LOADER */
.loader-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
}

.reveal-text {
  overflow: hidden;
  span {
    display: block;
    animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  }
}

@keyframes reveal {
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
}

/* 5. CUSTOM DECORATION */
.hero-canvas {
  height: 80vh;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.uppercase { text-transform: uppercase; }
.tracking-widest { letter-spacing: 4px; }
</style>