<template>    
    <v-card variant="outlined" class="editor ma-1 pa-1" >
        <MonacoEditor :options="options" v-model="code" :lang="lang" />
    </v-card>
</template>

<script setup>

const emit = defineEmits(["update", "update:code"]);

const props = defineProps({
    lang: {
        type: String,
        default: 'javascript'
    },
    dimension: {
        type: Object,
        default: () => ({ width: '100%', height: 'auto' }),
    },
    code: {
        type: String,
        default: ''
    }

})
const code = ref(props.code)

const options = ref({
    minimap: { enabled: false},
    automaticLayout: true,
    theme: 'vs-dark',
    dimension: {
        width: props.dimension.width || '100%',
        height: props.dimension.height || 'auto', // Maintain flexibility
    }
})

watch(() => code.value, (value) => {
    emit("update:code",  value)
})

</script>
<style scoped>
.editor {
    background-color: bisque;
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