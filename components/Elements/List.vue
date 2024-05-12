<template>
  <v-select
    variant="outlined"
    v-model="selectedElement"
    :items="items"
    item-title="name"
    item-value="_id"
    label="Elementos disponibles"
    persistent-hint
    return-object
    single-line
  ></v-select>
</template>
<script setup>
import { ref } from "vue";
import { useElementStore } from "~/store/element";

const elementStore = useElementStore();
const selectedElement = ref(null);

const items = ref([]);

watch(
  () => selectedElement.value,
  async (newValue) => {
    if (newValue) {
      (await elementStore.setDefaultElementById(newValue._id)) || {};
    }
  }
);
onMounted(async () => {
  items.value = await elementStore.getElements();
});
</script>
