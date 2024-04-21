<template>
    <div>
        Commander

        <v-btn icon="mdi-microphone" @click="initSpeechRecognize"></v-btn>
        <v-btn icon="mdi-microphone-off" @click="toggle"></v-btn>
        {{ isListening }}
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// call speech recognition controls
import { toggle, initSpeechRecognize, isListening } from '@/components/Speech/commands'

</script>
<style scoped></style>