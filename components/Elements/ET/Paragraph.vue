<template>
    <div>
        <p class="ma-2" :disabled="element.properties.disabled">
            {{ element.properties.data }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps({
    element: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped></style>
