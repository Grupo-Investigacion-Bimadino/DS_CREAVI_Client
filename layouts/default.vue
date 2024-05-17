<template>
  <v-app>
    <PanelProperties
      v-model="properties"
      @closeProperties="onCloseProperties"
    />
    <MenuOptionsSide v-model="drawer" />
    <v-card elevation="0">
      <v-layout>
        <v-app-bar elevation="0">
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-toolbar-title>CREAVI</v-toolbar-title>
          <v-spacer></v-spacer>
          <SocketBar
            :icon="'mdi-access-point'"
            :showId="false"
            :showIcon="true"
          />
          <SocketTest />
          <ModeToggleButton />
          <Teams />
        </v-app-bar>
        <v-main>
          <slot />
        </v-main>
      </v-layout>
      <Footer></Footer>
    </v-card>
  </v-app>
</template>
<script setup>
import { useAppStore } from "~/store/app";
import { ref } from "vue";

const appStore = useAppStore();
const drawer = ref(false);
const properties = ref(false);

const onCloseProperties = () => {
  properties.value = false;
  appStore.hideProperties();
};

watch(
  () => appStore.$state.showProperties,
  (value) => {
    if (value) properties.value = value;
  }
);

watch(
  () => properties.value,
  (value) => {
    if (!value) appStore.hideProperties();
  }
);

onMounted(() => {});
</script>
<style></style>
