<template>
  <v-combobox
    v-model="items"
    v-model:search="search"
    :hide-no-data="false"
    :items="items"
    label="Adicionar elementos a la propiedad"
    hide-selected
    multiple
    persistent-hint
    small-chips
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-title>
          No hay coincidencias para "<strong>{{ search }}</strong
          >". Presiona <kbd>enter</kbd> para crear una nueva etiqueta.
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script setup>
const props = defineProps(["label", "property"]);
const emit = defineEmits(["update:property"]);

const items = ref(props.property);
// se debe llenar con las clases disponibles
// const propertie = ref(props.property);
const search = ref(null);
// compute teext to array

watch(
  () => items.value,
  (newValue) => {
    emit("update:property", newValue);
  }
);
</script>

<style></style>
