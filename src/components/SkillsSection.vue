<template>
  <v-container id="skillsSection" class="py-16 px-0" fluid>
    <v-row no-gutters class="mb-12">
      <v-col cols="12" md="6">
        <div class="text-overline text-primary mb-2 tracking-widest">02 — EXPERTISE</div>
        <h2 class="editorial-title">Technical Stack</h2>
      </v-col>
    </v-row>

    <v-row no-gutters class="skill-matrix-border">
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="12"
        sm="6"
        md="3"
        class="skill-grid-item"
      >
        <v-hover v-slot="{ isHovering, props }">
          <div
            v-bind="props"
            class="skill-box pa-8 d-flex flex-column transition-swing"
            :class="{ 'skill-box-active': isHovering }"
          >
            <div class="d-flex justify-space-between align-start mb-10">
              <span class="text-caption font-weight-black opacity-20">
                {{ index < 9 ? `0${index + 1}` : index + 1 }}
              </span>
              <v-avatar size="40" rounded="0" class="skill-icon">
                <v-img :src="skill.img" contain :class="{ 'filter-white': isHovering }"></v-img>
              </v-avatar>
            </div>

            <div class="mt-auto">
              <h3 class="text-h6 font-weight-black mb-1 skill-name">{{ skill.name }}</h3>
              <div class="exp-wrapper overflow-hidden">
                <p class="text-caption text-uppercase tracking-wider text-primary font-weight-bold exp-text">
                  {{ skill.exp }} Experience
                </p>
              </div>
            </div>

            <div class="corner-accent"></div>
          </div>
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

/* Creating the Matrix Grid Lines */
.skill-matrix-border {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-left: 1px solid rgba(0, 0, 0, 0.08);
}

.skill-grid-item {
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.skill-box {
  height: 220px;
  position: relative;
  background: white;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;

  &.skill-box-active {
    background: #0f172a; /* Slate 900 */
    
    .skill-name { color: white; }
    .exp-text { transform: translateY(0); opacity: 1; }
    .corner-accent { width: 40px; height: 40px; }
  }
}

.skill-name {
  transition: color 0.3s ease;
}

.exp-text {
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease;
}

.skill-icon {
  transition: all 0.3s ease;
  .filter-white {
    filter: brightness(0) invert(1); /* Turns dark logos white on hover */
  }
}

.corner-accent {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  background: linear-gradient(225deg, rgb(var(--v-theme-primary)) 50%, transparent 50%);
  transition: all 0.3s ease;
}

.tracking-wider { letter-spacing: 2px !important; }
</style>
<script>
export default {
  props: ["skills"],
};
</script>
