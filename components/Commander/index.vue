// components/TextProcessor.vue
<script setup>
import { ref } from 'vue';

const regex = ref(/~(\w+)(?:\s+(.+))?/);
const props = defineProps({
    text: {
        type: String,
        required: true,
    },
});

const processText = () => {
    const processedText = props.text.replace(regex.value, (match, command, args) => {
        
    });
    return processedText;
};
</script>

<template>
</template>