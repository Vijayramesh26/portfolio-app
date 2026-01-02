<template>
  <v-container id="contactSection" class="py-16 px-0" fluid>
    <v-card variant="flat" class="contact-canvas rounded-xl overflow-hidden">
      <v-row no-gutters>
        <v-col cols="12" md="5" class="bg-slate-900 text-white pa-8 pa-md-16 d-flex flex-column">
          <div class="text-overline text-primary mb-4 tracking-widest">GET IN TOUCH</div>
          <h2 class="text-h2 font-weight-black mb-6 leading-tight">
            Let's build <br />
            something <span class="text-primary italic">iconic.</span>
          </h2>
          <p class="text-body-1 text-grey-lighten-1 mb-12">
            {{ contact.header || "I'm currently accepting new projects and collaborations." }}
          </p>

          <div class="mt-auto">
            <v-row>
              <v-col 
                v-for="info in contact.ContactInfo" 
                :key="info.title" 
                cols="12" 
                class="mb-4"
              >
                <div class="d-flex align-center">
                  <v-avatar color="white" variant="tonal" size="48" class="mr-4">
                    <v-icon color="white" size="20">{{ info.icon || 'mdi-chat-outline' }}</v-icon>
                  </v-avatar>
                  <div>
                    <div class="text-caption text-grey-darken-1 font-weight-bold uppercase">{{ info.title }}</div>
                    <div class="text-body-1 font-weight-medium">{{ info.description }}</div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>

        <v-col cols="12" md="7" class="bg-white pa-8 pa-md-16">
          <v-form ref="form" v-model="valid">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="YOUR NAME"
                  variant="underlined"
                  color="primary"
                  placeholder="John Doe"
                  persistent-placeholder
                  class="custom-field"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="EMAIL ADDRESS"
                  variant="underlined"
                  color="primary"
                  placeholder="john@example.com"
                  persistent-placeholder
                  class="custom-field"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  label="SERVICE INTERESTED IN"
                  :items="['Web Development', 'UI/UX Design', 'Branding', 'Consultation']"
                  variant="underlined"
                  color="primary"
                  class="custom-field"
                />
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="TELL ME ABOUT YOUR PROJECT"
                  variant="underlined"
                  color="primary"
                  auto-grow
                  rows="4"
                  placeholder="Goals, timeline, and budget..."
                  persistent-placeholder
                  class="custom-field"
                />
              </v-col>
              <v-col cols="12" class="pt-8 text-right">
                <v-btn
                  color="slate-900"
                  theme="dark"
                  size="x-large"
                  rounded="pill"
                  elevation="0"
                  class="px-10 py-6 send-btn"
                >
                  SEND MESSAGE
                  <v-icon end icon="mdi-send-outline" class="ml-2" size="small"></v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["contact"],
  data: () => ({
    valid: false
  })
};
</script>

<style scoped lang="scss">
.contact-canvas {
  box-shadow: 0 40px 100px rgba(0,0,0,0.08) !important;
  border: 1px solid rgba(0,0,0,0.05);
}

.leading-tight {
  line-height: 1.1;
}

.custom-field {
  :deep(.v-label) {
    font-size: 0.75rem !important;
    font-weight: 800 !important;
    letter-spacing: 1.5px;
    opacity: 0.8;
  }
  
  :deep(.v-field__input) {
    font-size: 1.1rem;
    padding-top: 20px;
  }
}

.send-btn {
  font-weight: 700;
  letter-spacing: 2px;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
  }
}

.italic {
  font-family: 'Playfair Display', serif; /* Or any serif font for elegance */
  font-style: italic;
}

.bg-slate-900 {
  background-color: #0f172a !important;
}
</style>