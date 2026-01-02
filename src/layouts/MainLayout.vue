<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>{{ portfolio?.Profile.name }}</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="item in navItems"
        :key="item.to"
        text
        @click="scrollToSection(item.to)"
      >
        {{ item.title }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  props: ["portfolio"],
  data() {
    return {
      navItems: [
        { title: "Profile", to: "profileSection" },
        { title: "About", to: "aboutSection" },
        { title: "Skills", to: "skillsSection" },
        { title: "Projects", to: "projectsSection" },
        { title: "Experience", to: "experienceSection" },
        { title: "Contact", to: "contactSection" },
      ],
    };
  },
  methods: {
    scrollToSection(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>
