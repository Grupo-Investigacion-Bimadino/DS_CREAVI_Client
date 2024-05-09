<template>
    <p :class="combinedClasses" :disabled="element.properties.disabled">
        {{ element.properties.data }}
    </p>
</template>
<script lang="ts" setup>
// class align ['left', 'center', 'right', 'justify']
// class size ["sm", "md", "lg", "xl"]
const props = defineProps({
    element: {
        type: Object,
        required: true,
    },
});

const combinedClasses = computed(() => {
    // Ensure `element.properties.class` is an array
    const classes = Array.isArray(element.properties.class)
        ? element.properties.class
        : []; // Return empty array if not an array

    // Join classes with spaces
    return classes.join(' ');
});
</script>

<style scoped></style>
