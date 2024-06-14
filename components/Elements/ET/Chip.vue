<template>
  <v-chip
    :closable="element.properties.closable"
    :prepend-icon="element.properties.prepend_icon"
    :append-icon="element.properties.append_icon"
    :variant="element.properties.variant"
		:class="combinedClasses(element.properties.class)"
  >
    {{ element.properties.data }}
  </v-chip>
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

<style></style>
