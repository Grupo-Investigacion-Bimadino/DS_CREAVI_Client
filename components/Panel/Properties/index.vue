<template>
  <v-navigation-drawer width="500" :temporary="true" class="bg-grey-darken-3">
    <v-layout style="height: 30px">
      <v-system-bar window>
        <span>Elemento {{ element.name }} :[{{ element.type }}]</span>
        <v-spacer></v-spacer>
        <v-btn
          class="ms-2"
          icon="mdi-close-box"
          variant="text"
          @click.stop="close"
        ></v-btn>
      </v-system-bar>
    </v-layout>

    <v-tabs v-model="tab" align-tabs="center">
      <v-tab value="tab-properties"> <v-icon>mdi-cog</v-icon> </v-tab>
      <v-tab value="tab-elements">
        <v-icon>mdi-package-variant-closed-plus</v-icon>
      </v-tab>
      <v-tab value="tab-versions"> <v-icon>mdi-github</v-icon> </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="tab-properties">
        <PanelPropertiesFields />
      </v-window-item>
      <v-window-item value="tab-elements">
        Elementos disponibles
      </v-window-item>
      <v-window-item value="tab-versions"> Versiones </v-window-item>
    </v-window>
  </v-navigation-drawer>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import { useElementStore } from "~/store/element";
const elementStore = useElementStore();
const element = computed(() => elementStore.getElement);

const props = defineProps(["properties"]);
const tab = ref(null);

const emit = defineEmits(["closeProperties"]);
const appStore = useAppStore();

const close = () => {
  emit("closeProperties");
};
</script>
<style></style>
