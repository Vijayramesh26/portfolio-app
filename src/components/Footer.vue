<template>
  <v-footer class="bg-slate-900 text-white pt-16 pb-8 px-0">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center mb-16">
          <h2 class="footer-title">
            HAVE A PROJECT <br />
            <span class="text-outline">IN MIND?</span>
          </h2>
          <v-btn
            size="x-large"
            variant="outlined"
            rounded="pill"
            class="mt-10 px-12 py-8 hire-me-btn"
            @click="scrollTo('contact')"
          >
            GET IN TOUCH
            <v-icon end icon="mdi-arrow-right-thin" class="ml-2"></v-icon>
          </v-btn>
        </v-col>

        <v-col cols="12">
          <v-divider color="white" class="opacity-10 mb-12"></v-divider>
        </v-col>

        <v-col cols="12" md="4" class="mb-10 mb-md-0">
          <div class="text-h4 font-weight-black tracking-tighter mb-4">
            {{ footer?.brandName || 'PORTFOLIO.' }}
          </div>
          <p class="text-body-2 text-grey-lighten-1 max-w-sm">
            Digital designer and developer specializing in high-end editorial web experiences. 
            Currently available for select freelance opportunities.
          </p>
        </v-col>

        <v-col cols="6" md="2" offset-md="2">
          <div class="text-overline text-grey-darken-1 mb-6">Navigation</div>
          <ul class="footer-links">
            <li v-for="link in ['Home', 'About', 'Projects', 'Experience']" :key="link">
              <a @click="scrollTo(link.toLowerCase())">{{ link }}</a>
            </li>
          </ul>
        </v-col>

        <v-col cols="6" md="2">
          <div class="text-overline text-grey-darken-1 mb-6">Social</div>
          <ul class="footer-links">
            <li><a href="#" target="_blank">LinkedIn</a></li>
            <li><a href="#" target="_blank">GitHub</a></li>
            <li><a href="#" target="_blank">Twitter</a></li>
            <li><a href="#" target="_blank">Instagram</a></li>
          </ul>
        </v-col>

        <v-col cols="12" class="mt-16 d-flex flex-column flex-md-row justify-space-between align-center">
          <div class="text-caption text-grey-darken-2 mb-4 mb-md-0">
            © {{ new Date().getFullYear() }} — DESIGNED & CODED WITH PRECISION
          </div>
          
          <div class="d-flex align-center">
            <span class="text-caption text-grey-darken-2 mr-4">LOCAL TIME: {{ localTime }}</span>
            <v-icon size="small" color="success" class="mr-2">mdi-circle-medium</v-icon>
            <span class="text-caption text-grey-lighten-1">AVAILABLE FOR WORK</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: ['footer'],
  data: () => ({
    localTime: ''
  }),
  mounted() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      this.localTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style scoped lang="scss">
.footer-title {
  font-size: clamp(3rem, 10vw, 8rem);
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: -4px;
}

.text-outline {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
  color: transparent;
}

.footer-links {
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 12px;
    
    a {
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        color: white;
        padding-left: 8px;
      }
    }
  }
}

.hire-me-btn {
  border-color: rgba(255,255,255,0.2) !important;
  font-weight: 700;
  letter-spacing: 2px;
  
  &:hover {
    background: white !important;
    color: black !important;
  }
}

.max-w-sm {
  max-width: 300px;
}
</style>