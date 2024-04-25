<template>
    <v-app id="app">
        <MenuOptionsSide v-model="drawer" />
        <v-card elevation="0">
            <v-layout>
                <v-app-bar elevation="0">
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <v-toolbar-title>CREAVI</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
                </v-app-bar>
                <v-main>
                    <MenuOptionsAside />
                    <slot />
                </v-main>
            </v-layout>
            <v-footer>
                <div>{{ new Date().getFullYear() }} — <strong>Echo 4</strong></div>
            </v-footer>
        </v-card>
    </v-app>
</template>
<script setup>
import { ref } from 'vue';
const drawer = ref(false);

onMounted(() => { });
</script>
<style></style>
