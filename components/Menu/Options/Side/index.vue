<template>
  <v-navigation-drawer temporary>
    <template v-slot:prepend>
      <v-list-item lines="two" :prepend-avatar="user.picture" :to="'/profile'">
        <template v-slot:default>
          <v-list-item-title class="truncate">
            <v-icon>{{ userIcon(user.role) }}</v-icon>
            {{ user.username }}
          </v-list-item-title>
          <v-list-item-subtitle class="truncate" :to="user.email">{{
            user.email
          }}</v-list-item-subtitle>
        </template>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :prepend-icon="item.icon"
        :title="item.title"
        :value="item.value"
        :to="item.to"
        :key="i"
      />
    </v-list>
    <ModeToggle />
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();

const user = authStore.getUser;

// Roles: ['admin', 'teacher', 'guest', 'student']
const userIcon = (role) =>
  ({
    admin: "mdi-account-star",
    teacher: "mdi-account-tie",
    guest: "mdi-account-alert",
    student: "mdi-account-edit",
  }[role]);

const items = ref([
  {
    title: "Elementos",
    value: "elements",
    to: "/elements",
    icon: "mdi-view-dashboard",
  },
  {
    title: "Messages",
    value: "chats",
    to: "/chat",
    icon: "mdi-chat",
  },
  {
    title: "Speech",
    value: "speech",
    to: "/speech",
    icon: "mdi-microphone",
  },
  {
    title: "Version Control System",
    value: "vcs",
    to: "/vcs",
    icon: "mdi-github",
  },
  {
    title: "Trabajo Colaborativo",
    value: "/colaborativeteams",
    to: "/colaborativeTeams",
    icon: "mdi-account-multiple",
  },
  {
    title: "Perfil",
    value: "profile",
    to: "/profile",
    icon: "mdi-account",
  },
  {
    title: "Login",
    value: "login",
    to: "/auth/login",
    icon: "mdi-login",
  },
  {
    title: "Logout",
    value: "logout",
    to: "/auth/logout",
    icon: "mdi-logout",
  },
  {
    title: "Contenidos",
    value: "content",
    to: "/content",
    icon: "mdi-view-dashboard",
  },
]);
</script>

<style>
.truncate {
  white-space: nowrap;
  /* Evita que el texto se divida en varias líneas */
  overflow: hidden;
  /* Oculta el texto que se desborda del contenedor */
  text-overflow: ellipsis;
  /* Agrega puntos suspensivos (...) cuando el texto se desborda */
}
</style>
