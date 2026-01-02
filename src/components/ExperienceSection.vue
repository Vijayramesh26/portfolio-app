<template>
  <v-container id="experienceSection" class="py-16 px-0" fluid>
    <v-row no-gutters>
      <v-col cols="12" class="mb-12">
        <div class="text-overline text-primary mb-2 tracking-widest">04 — JOURNEY</div>
        <h2 class="editorial-title">Professional Path</h2>
      </v-col>

      <v-col cols="12">
        <div class="timeline-wrapper">
          <div 
            v-for="(exp, index) in experiences" 
            :key="index" 
            class="experience-block"
          >
            <v-row no-gutters>
              <v-col cols="12" md="2" class="period-axis pb-4">
                <span class="text-h6 font-weight-black tracking-tighter period-text">
                  {{ exp.period }}
                </span>
                <div class="axis-line d-none d-md-block"></div>
              </v-col>

              <v-col cols="12" md="10" class="pl-md-10 pb-16">
                <v-hover v-slot="{ isHovering, props }">
                  <v-card 
                    v-bind="props" 
                    variant="flat" 
                    class="exp-card bg-transparent"
                  >
                    <div class="d-flex flex-column flex-sm-row align-sm-center mb-4">
                      <h3 class="text-h4 font-weight-black mr-4 company-name">
                        {{ exp.company }}
                      </h3>
                      <v-chip 
                        variant="tonal" 
                        color="primary" 
                        size="small" 
                        class="mt-2 mt-sm-0 role-chip"
                      >
                        {{ exp.role }}
                      </v-chip>
                    </div>

                    <div class="description-text mb-6">
                      <p v-html="exp.description" class="text-body-1 text-slate-600 leading-relaxed"></p>
                    </div>

                    <div class="d-flex flex-wrap gap-2">
                      <span 
                        v-for="tech in exp.technologies" 
                        :key="tech"
                        class="tech-tag"
                      >
                        #{{ tech }}
                      </span>
                    </div>

                    <div 
                      class="hover-line mt-8" 
                      :class="{ 'active': isHovering }"
                    ></div>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </div>
        </div>
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

.timeline-wrapper {
  position: relative;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: 4rem;
}

.experience-block {
  position: relative;
  
  &:last-child .axis-line {
    display: none;
  }
}

.period-axis {
  position: relative;
  .period-text {
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }
  
  .axis-line {
    position: absolute;
    left: 0;
    top: 40px;
    bottom: 0;
    width: 1px;
    background: linear-gradient(to bottom, rgba(var(--v-theme-primary), 0.5), transparent);
  }
}

.exp-card {
  transition: all 0.4s ease;
  
  &:hover {
    .company-name { color: rgb(var(--v-theme-primary)); }
    .period-text { opacity: 1; }
  }
}

.company-name {
  letter-spacing: -1.5px;
  transition: color 0.3s ease;
}

.tech-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  margin-right: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hover-line {
  height: 1px;
  width: 0;
  background: rgba(0,0,0,0.1);
  transition: width 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &.active {
    width: 100%;
    background: rgba(var(--v-theme-primary), 0.3);
  }
}

.gap-2 { gap: 8px; }

.leading-relaxed { line-height: 1.8; }
</style>
<script>
export default {
  props: ["experiences"],
};
</script>
