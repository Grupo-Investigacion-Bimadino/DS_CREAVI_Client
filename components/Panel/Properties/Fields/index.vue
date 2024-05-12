<template>
  <div>
    <v-list-item
      v-for="(property, propertyName) in element.properties"
      :key="propertyName"
    >
      <component
        :is="getComponetByType(typeof element.properties[propertyName])"
        :label="propertyName"
        v-model:property="element.properties[propertyName]"
        variant="outlined"
        class="pt-2 ma-0"
      />
      <v-divider class="border-opacity-75"></v-divider>
    </v-list-item>
  </div>
</template>

<script setup>
// get element actual to storage
import { ref, computed } from "vue";
import { useElementStore } from "~/store/element";
import {
  PanelPropertiesFieldsInputText,
  PanelPropertiesFieldsSwitch,
  PanelPropertiesFieldsObject,
} from "#components";
const elementStore = useElementStore();
const element = computed(() => elementStore.getElement);

const getComponetByType = (type) =>
  ({
    object: PanelPropertiesFieldsObject,
    string: PanelPropertiesFieldsInputText,
    number: PanelPropertiesFieldsInputText,
    boolean: PanelPropertiesFieldsSwitch,
    default: PanelPropertiesFieldsInputText,
  }[type]);
</script>

<style></style>
