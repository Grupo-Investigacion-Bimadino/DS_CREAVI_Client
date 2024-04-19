<template>
    <v-app id="app">
        <!--v-navigation-drawer v-model="drawer" temporary>
            <template v-slot:prepend>
                <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                    subtitle="Logged in" title="Jane Smith"></v-list-item>
            </template>
<v-divider></v-divider>
<v-list :items="items"></v-list>
</v-navigation-drawer-->
        <MenuOptionsSide v-model="drawer" />
        <v-card>
            <v-layout>
                <v-app-bar elevation="0">
                    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                    <v-toolbar-title>CREAVI</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
                </v-app-bar>
                <v-main class="main">
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
<style>
.main {
    padding: 20px;
    height: 95vh;
}
</style>
