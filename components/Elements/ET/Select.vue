<template>
  <v-select v-model="element.properties.v_model" :multiple="element.properties.multiple" :hint="element.properties.hint"
    :items="element.properties.items" item-title="text" item-value="value" :label="element.properties.label"
    :variant="element.properties.variant" :persistent-hint="element.properties.persistent_hint"></v-select>
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