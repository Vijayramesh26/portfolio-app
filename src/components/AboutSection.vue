<template>
  <v-container class="py-16 px-0" fluid>
    <v-row no-gutters class="mb-16">
      <v-col cols="12" lg="8">
        <div class="text-overline text-primary mb-4 tracking-widest">01 — BACKGROUND</div>
        <h2 class="editorial-title mb-8">
          {{ about.title || 'Crafting Digital Presence' }}
        </h2>
        <p class="text-h5 font-weight-light leading-relaxed text-slate-600 max-w-xl">
          {{ about.header }}
        </p>
      </v-col>
    </v-row>

    <!-- <v-row class="mb-16">
      <v-col cols="12">
        <div class="d-flex align-center mb-8">
          <span class="text-h6 font-weight-black">SKILLSET</span>
          <v-divider class="ml-4 opacity-10"></v-divider>
        </div>
      </v-col>
      
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        :class="index % 2 === 0 ? 'mt-md-0' : 'mt-md-12'" 
      >
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            v-bind="props"
            variant="flat"
            class="skill-card pa-8 transition-swing"
            :class="{ 'elevation-12': isHovering }"
          >
            <div class="d-flex justify-space-between align-start mb-6">
              <v-avatar rounded="lg" size="50" class="bg-slate-50 pa-2">
                <v-img :src="skill.img" contain />
              </v-avatar>
              <span class="text-caption font-weight-black opacity-30">0{{ index + 1 }}</span>
            </div>
            
            <h3 class="text-h6 font-weight-bold mb-2">{{ skill.name }}</h3>
            <p class="text-body-2 text-grey-darken-1">{{ skill.exp }}</p>
            
            <v-expand-transition>
              <div v-if="isHovering" class="pt-4">
                <v-divider class="mb-4"></v-divider>
                <span class="text-caption font-weight-bold text-primary">PROFICIENCY: ADVANCED</span>
              </div>
            </v-expand-transition>
          </v-card>
        </v-hover>
      </v-col>
    </v-row> -->

    <v-row v-if="Job?.length" class="mt-16 bg-slate-900 text-white rounded-xl pa-8 pa-md-16">
      <v-col cols="12" md="4">
        <h2 class="text-h3 font-weight-black mb-6">Experience</h2>
        <p class="text-grey-lighten-1">The path I've taken through different industries and creative roles.</p>
      </v-col>
      
      <v-col cols="12" md="8">
        <div v-for="(job, index) in Job" :key="index" class="job-row py-8">
          <v-row align="center">
            <v-col cols="12" sm="8">
              <h3 class="text-h5 font-weight-bold mb-2">{{ job.title }}</h3>
              <p class="text-body-1 text-grey-lighten-2 opacity-70">{{ job.description }}</p>
            </v-col>
            <v-col cols="12" sm="4" class="text-sm-right">
              <v-btn variant="outlined" rounded="pill" size="small" class="opacity-50">
                View Archive
              </v-btn>
            </v-col>
          </v-row>
          <v-divider v-if="index !== Job.length - 1" class="mt-8 opacity-10" color="white"></v-divider>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["about"],
  computed: {
    skills() { return this.about.skills || []; },
    Job() { return this.about.Job || []; },
  },
};
</script>

<style scoped lang="scss">
.editorial-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -2px;
  color: #1e293b;
}

.skill-card {
  background: white;
  border: 1px solid rgba(0,0,0,0.03);
  border-radius: 24px !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &:hover {
    transform: translateY(-8px);
    background: #ffffff;
  }
}

.job-row {
  transition: all 0.3s ease;
  &:hover {
    padding-left: 20px;
    background: rgba(255, 255, 255, 0.03);
  }
}

.leading-relaxed {
  line-height: 1.6;
}

.max-w-xl {
  max-width: 600px;
}
</style>