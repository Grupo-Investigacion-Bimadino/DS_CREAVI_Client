<template>
    <div>
        <v-btn variant="outlined" icon="mdi-microphone" @click="toggle"></v-btn>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { toggle, initSpeechRecognize, isListening } from '@/components/Speech/commands'

onMounted(() => {
    initSpeechRecognize()
})

watch(isListening, (newVal) => {
    console.log('isListening', newVal)
})
</script>
<style scoped></style>