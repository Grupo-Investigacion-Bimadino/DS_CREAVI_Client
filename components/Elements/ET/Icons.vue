<template>
  <v-icon
    :color="element.properties.color"
    :icon="element.properties.icon"
    :size="element.properties.size"
    :disabled="element.properties.disabled"
    :class="combinedClasses(element.properties.class)"
  >
  </v-icon>
</template>
<script setup>
const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});

const combinedClasses = computed(() => {
  const classes = Array.isArray(props.element.properties.class)
    ? props.element.properties.class
    : [];
  return classes.join(" ");
});
</script>
