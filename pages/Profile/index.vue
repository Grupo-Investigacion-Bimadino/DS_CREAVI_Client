<template>
  <v-card class="mx-auto pa-1" max-width="434" variant="outlined">
    <v-img height="100%" src="/images/bg_login_.jpeg" cover class="pa-2">
      <v-avatar color="grey" rounded="10" size="150">
        <v-img :src="user.picture" cover></v-img>
      </v-avatar>
    </v-img>
    <v-list-item :subtitle="user.email" :title="user.username"></v-list-item>
  </v-card>
</template>
<script setup>
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();
const user = authStore.getUser;
</script>