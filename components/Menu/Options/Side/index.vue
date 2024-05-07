<template>
    <v-navigation-drawer temporary>
        <template v-slot:prepend>
            <v-list-item lines="two" prepend-avatar="https://avatars.githubusercontent.com/u/37457488?v=4"
                title="Alexander Toscano" subtitle="@atoscano">

            </v-list-item>
        </template>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="(item, i) in items" :prepend-icon="item.icon" :title="item.title" :value="item.value"
                :to="item.to" :key="i" />
        </v-list>
        <ModeToggle />
    </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
const items = ref([
    {
        title: 'Elementos',
        value: 'elements',
        to: "/elements",
        icon: 'mdi-view-dashboard'
    },
    {
        title: 'Messages',
        value: 'chats',
        to: "/chat",
        icon: 'mdi-chat'
    },
    {
        title: 'Speech',
        value: 'speech',
        to: "/speech",
        icon: 'mdi-microphone'

    },
    {
        title: 'Version Control System',
        value: 'vcs',
        to: "/vcs",
        icon: 'mdi-github'
    },
    {
        title: 'Login',
        value: 'login',
        to: "/auth/login",
        icon: 'mdi-login'
    }
]);
</script>

<style></style>