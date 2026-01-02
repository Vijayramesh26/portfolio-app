<template>
  <v-app-bar
    flat
    :height="isScrolled ? 70 : 90"
    :class="['px-md-10 navbar-transition', isScrolled ? 'glass-effect' : 'bg-transparent']"
  >
    <v-app-bar-title class="brand-text">
      <span class="font-weight-black text-h5 tracking-tighter">
        {{ profile?.initials || 'P.' }}
      </span>
      <span class="ml-2 font-weight-light text-body-2 d-none d-sm-inline opacity-60">
        / {{ profile?.role || 'Creative' }}
      </span>
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <div class="d-none d-md-flex align-center">
      <v-btn
        v-for="item in sections"
        :key="item.value"
        variant="text"
        :ripple="false"
        class="nav-link mx-2"
        @click="scrollTo(item.value)"
      >
        {{ item.title }}
      </v-btn>
      
      <v-btn
        variant="flat"
        color="primary"
        rounded="pill"
        class="ml-6 px-6 contact-btn"
        @click="scrollTo('contact')"
      >
        Let's Talk
      </v-btn>
    </div>

    <v-app-bar-nav-icon 
      class="d-md-none" 
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    width="300"
    class="pa-6"
    theme="dark"
  >
    <div class="d-flex flex-column h-100">
      <div class="text-right mb-10">
        <v-btn icon="mdi-close" variant="text" @click="drawer = false"></v-btn>
      </div>
      
      <v-list nav class="flex-grow-1">
        <v-list-item
          v-for="item in sections"
          :key="item.value"
          @click="scrollTo(item.value)"
          class="mb-4"
        >
          <v-list-item-title class="text-h4 font-weight-bold">
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <div class="social-footer pa-4">
        <p class="text-caption text-grey">Socials</p>
        <v-btn icon="mdi-github" variant="text"></v-btn>
        <v-btn icon="mdi-linkedin" variant="text"></v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    profile: Object,
    sections: Array
  },
  data: () => ({
    drawer: false,
    isScrolled: false
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    scrollTo(id) {
      this.drawer = false;
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.navbar-transition {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
}

.glass-effect {
  background: rgba(255, 255, 255, 0.7) !important;
  backdrop-filter: blur(15px) saturate(150%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05) !important;
}

.brand-text {
  letter-spacing: -1px;
}

.nav-link {
  text-transform: capitalize;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
    background: transparent;
    
    &::after {
      width: 20px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: currentColor;
    transition: width 0.3s ease;
  }
}

.contact-btn {
  font-weight: 600;
  letter-spacing: 0;
  box-shadow: 0 4px 15px rgba(var(--v-theme-primary), 0.2);
}

.tracking-tighter {
  letter-spacing: -1.5px !important;
}
</style>