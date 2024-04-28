<template>
  <v-container>
    <v-btn icon="mdi-message" @click="testMessage">
      <v-icon color="primary">mdi-message</v-icon>
    </v-btn>
    <v-tooltip activator="parent" location="bottom">
      {{ message }}
    </v-tooltip>
  </v-container>
</template>
<script setup>
import { ref, onMounted } from "vue";
const { $io } = useNuxtApp();

const message = ref("");

const testMessage = () => {
  console.log("Cliente Mensaje de prueba de Socket");
  $io.emit("sendTestMessage", "Cliente Mensaje de prueba de Socket");
};

onMounted(async () => {
  $io.on("responseTestMessage", (data) => {
    console.log('Mensaje respuesta', data);
    message.value = data;
  });
});
</script>
