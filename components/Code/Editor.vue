<template>
  <v-card variant="outlined" class="editor ma-1 pa-1">
    <v-btn variant="outlined" class="my-2" @click="updateElement" type="text">
      <v-badge dot :color="isChanged ? 'success' : 'white'" floating>
        <v-icon>mdi-file-upload-outline</v-icon>
      </v-badge>
      <v-tooltip activator="parent" location="top">
        {{ isChanged ? "Guardar cambios" : "No hay cambios por guardar" }}
      </v-tooltip>
    </v-btn>

    <MonacoEditor :options="options" v-model="codeTemp" :lang="lang" />
  </v-card>
</template>

<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: "javascript",
  },
  dimension: {
    type: Object,
    default: () => ({ width: "100%", height: "auto" }),
  },
  code: {
    type: String,
    default: "",
  },
});

const codeTemp = ref(props.code);
const emit = defineEmits(["update", "update:code"]);
const isChanged = ref(false);

const options = ref({
  minimap: { enabled: false },
  automaticLayout: true,
  theme: "vs-dark",
  dimension: {
    width: props.dimension.width || "100%",
    height: props.dimension.height || "auto",
  },
});

watch(
  () => props.code,
  (value) => {
    codeTemp.value = value;
  }
);

watch(
  () => codeTemp.value,
  (value) => {
    isChanged.value = true;
  }
);

const updateElement = () => {
  emit("update:code", codeTemp.value);
  isChanged.value = false;
};
</script>
<style scoped>
.editor {
  background-color: rgb(255, 255, 255);
}

.editor-container {
  display: flex;
  flex-grow: 1;
}

/* Optional responsive styles:
@media (max-width: 768px) {
  .editor-container {
    flex-grow: 0; // Disable growth on smaller screens
  }
}
*/
</style>
<!-- https://e-chan1007.github.io/nuxt-monaco-editor/ -->
<!-- https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IStandaloneEditorConstructionOptions.html#automaticLayout -->
<!-- https://nuxt.com/modules/nuxt-monaco-editor -->
