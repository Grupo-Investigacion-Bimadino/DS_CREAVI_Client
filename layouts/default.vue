<template>
    <v-app>
        <MenuOptionsSide v-model="drawer" />
        <v-card elevation="0">
            <v-layout>
                <v-app-bar elevation="0">
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <v-toolbar-title>CREAVI</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <SocketBar :icon="'mdi-access-point'" :showId="false" :showIcon="true" />
                    <SocketTest />
                    <ModeToggleButton />
                </v-app-bar>
                <v-main>
                    <PanelPropertiesDialog />
                    <slot />
                </v-main>
            </v-layout>
            <Footer></Footer>
        </v-card>
    </v-app>
</template>
<script setup>
import { ref } from 'vue';
const drawer = ref(false);

onMounted(() => { });
</script>
<style></style>
