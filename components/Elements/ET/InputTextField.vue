<template>
  <v-text-field
    :class="combinedClasses"
    :label="element.properties.label"
    :disabled="element.properties.disabled"
    :variant="element.properties.variant"
    :clearable="element.properties.clearable"
    v-model="element.properties.data"
    :prepend-icon="element.properties.prepend_icon"
    :prepend-inner-icon="element.properties.prepend_inner_icon"
    :append-icon="element.properties.append_icon"
    :prefix="element.properties.prefix"
    :suffix="element.properties.suffix"
    :type="element.properties.type"
    :details="element.properties.details"
  >
  </v-text-field>
</template>

<script setup>
// se importan las referencia reactivas y computadas
import { ref, computed } from "vue";
// son los datos que se recolectan de un formualrio
const data = ref("");
// existe una sola props que es el elemento que se va a renderizar y esta contiene las demas propiedades
const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});
// en class se recibe un array se transforma a string
const combinedClasses = computed(() => {
  // computed se utiliza para transformar los datos que se reciben
  const classes = Array.isArray(props.element.properties.class)
    ? props.element.properties.class
    : [];
  return classes.join(" ");
});
</script>

<style></style>
