<template>
  <v-container>
    <div class="text-center">
      <VLayoutItem model-value position="top" class="text-end" size="88">
        <div class="ma-4">
          <VBtn icon="mdi-forum" size="large" :color="color" elevation="8" @click="sheet = !sheet">
          </VBtn>
        </div>
      </VLayoutItem>
      <!--v-bottom-sheet v-model="sheet"-->
      <v-card class="text-center" height="500" v-if="sheet">
        <v-btn variant="text" @click="sheet = !sheet"> close </v-btn>
        <!--VLayoutItem model-value position="top" class="text-end" size="88">
            <div class="ma-4">
              <v-btn
                icon="mdi-close"
                :color="close_color"
                @click="sheet = !sheet"
                size="large"
              >
              </v-btn>
            </div>
          </VLayoutItem-->
        <ChatRoom />
      </v-card>
      <!--/v-bottom-sheet-->
    </div>
  </v-container>
</template>
<script setup>
import { ref } from "vue";
const sheet = ref(false);
const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  close_color: {
    type: String,
    default: "red",
  },
});
</script>

<style lang="scss" scoped></style>
