<template>
  <v-expansion-panels
    :multiple="element.properties.multiple"
    :readonly="element.properties.readonly"
  >
    <v-expansion-panel
      :title="element.properties.title"
      :disabled="element.properties.disabled"
      :value="element.properties.value"
    >
      {{ element.properties.data }}
    </v-expansion-panel>
  </v-expansion-panels>
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
