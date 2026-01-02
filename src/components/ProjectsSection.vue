<template>
  <v-container id="projectSection" class="py-16 px-0" fluid>
    <v-row no-gutters class="mb-16">
      <v-col cols="12" md="6">
        <div class="text-overline text-primary mb-2 tracking-widest">03 — SELECTED WORKS</div>
        <h2 class="editorial-title">Featured Projects</h2>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-end justify-md-end mt-4 mt-md-0">
        <p class="text-body-2 text-grey-darken-1 max-w-xs text-md-right">
          A collection of digital products focused on performance, accessibility, and refined aesthetics.
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        :md="index % 3 === 0 ? 12 : 6"
        :class="['project-wrapper', {'stagger-up': index % 3 !== 0 && index % 2 !== 0}]"
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            variant="flat"
            class="project-card overflow-hidden"
            :class="{ 'is-active': isHovering }"
          >
            <div class="image-zoom-container">
              <v-img
                :src="project.image"
                :height="index % 3 === 0 ? '500' : '400'"
                cover
                class="project-image"
              >
                <div class="fill-height project-overlay d-flex flex-column justify-end pa-8">
                  <v-fade-transition>
                    <div v-if="isHovering" class="overlay-content">
                      <div class="d-flex gap-2 mb-4">
                        <v-chip
                          v-for="tech in project.language"
                          :key="tech"
                          density="comfortable"
                          size="small"
                          color="white"
                          variant="outlined"
                          class="backdrop-blur"
                        >
                          {{ tech }}
                        </v-chip>
                      </div>
                      <div class="d-flex">
                        <v-btn
                          v-if="project.github"
                          icon="mdi-github"
                          variant="tonal"
                          color="white"
                          class="mr-2"
                          :href="project.github"
                          target="_blank"
                        ></v-btn>
                        <v-btn
                          v-if="project.demo"
                          icon="mdi-arrow-top-right"
                          variant="flat"
                          color="primary"
                          :href="project.demo"
                          target="_blank"
                        ></v-btn>
                      </div>
                    </div>
                  </v-fade-transition>
                </div>
              </v-img>
            </div>

            <div class="pt-6 pb-12">
              <div class="d-flex align-center justify-space-between">
                <h3 class="text-h4 font-weight-black tracking-tighter">
                  {{ project.title }}
                </h3>
                <span class="text-caption font-weight-bold opacity-30">/ 0{{ index + 1 }}</span>
              </div>
              <p class="text-body-1 text-slate-500 mt-2 max-w-md">
                {{ project.description }}
              </p>
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.editorial-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -3px;
  line-height: 1;
}

.project-wrapper {
  margin-bottom: 4rem;
}

/* Creating the "Editorial" staggered look */
@media (min-width: 960px) {
  .stagger-up {
    margin-top: 120px;
  }
}

.project-card {
  background: transparent !important;
  cursor: pointer;
  
  .image-zoom-container {
    border-radius: 4px; /* Minimalist sharp-ish corners */
    overflow: hidden;
    background: #f1f5f9;
  }

  .project-image {
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &.is-active .project-image {
    transform: scale(1.05);
  }
}

.project-overlay {
  background: linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.is-active .project-overlay {
  opacity: 1;
}

.backdrop-blur {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
}

.tracking-tighter {
  letter-spacing: -1.5px !important;
}

.max-w-xs { max-width: 250px; }
.max-w-md { max-width: 450px; }
.gap-2 { gap: 8px; }
</style>

<script>
export default {
  props: ["projects"],
};
</script>
