import { ref, watch } from 'vue-demi'
import type { SpeechRecognition } from './types'

export var isListening = ref(false);
export var lastCommand = ref("");
export let recognition: SpeechRecognition;

const SpeechRecognition = window && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)

export const toggle = () => {
    console.log("toggle");
    isListening.value = !isListening.value
}

export const initSpeechRecognize = () => {
    console.log("Start lisnening");

    recognition = new SpeechRecognition() as SpeechRecognition
    recognition.continuous = true;
    recognition.lang = "es-ES";

    recognition.onresult = (event) => {
        console.log("onresult", event.results[0][0])
        const result = event.results[0][0];
        const command = result.transcript;
        const confidence = Math.floor(result.confidence * 10000) / 100;

        lastCommand.value = `Comando: "${command}" ${confidence}% de confianza`;

        executeCommand(command.toLowerCase());
    };

    recognition.onstart = () => {
        console.log("onstart");
    };

    recognition.onend = () => {
        console.log("onend");
    };


    watch(isListening, () => {
        console.log("isListening", isListening.value);
        if (isListening.value)
            recognition.start()
        else
            recognition.stop()
    })
}

export const executeCommand = (command: any) => {
    console.log("Comando:", command);
}


