<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="tempWidth" label="Width" type="text" :suffix="currentUnit" @input="updateWidth" variant="outlined">
            <template v-slot:append>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props" class="mt-n2"> Unidad </v-btn>
                </template>
                <v-card>
                  <v-card-text class="pa-1">
                    <v-radio-group v-model="currentUnit" @change="updateWidth">
                      <v-radio label="Pixels" value="px"></v-radio>
                      <v-radio label="Ems" value="em"></v-radio>
                      <v-radio label="Porcentaje" value="%"></v-radio>
                    </v-radio-group>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { ref, watchEffect, watch } from "vue";

const props = defineProps({
  tempWidth: {
    type: String,
    required: true,
  },
});

const tempWidth = ref(props.tempWidth);

const emit = defineEmits();
watch(tempWidth, (newTempWidth) => {
  emit("onChangeWidth", tempWidth.value);
});

const currentUnit = ref("");
const widthValue = ref("");
const unitMenu = ref(false);

const updateWidth = () => {
  const widthInteger = parseInt(widthValue.value);
  const formatedWidth = `${widthInteger}${currentUnit.value}`;
  tempWidth.value = formatedWidth;
};

watchEffect(() => {
  if (props.tempWidth) {
    if (typeof props.tempWidth === "string") {
      const width = props.tempWidth || "";
      const match = width.match(/^([\d.]+)(\D+)$/);
      if (match) {
        widthValue.value = match[1];
        currentUnit.value = match[2];
      }
    }
  }
});
</script>
