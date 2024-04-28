<template>
  <div>
    <span v-if="showId"> Socket ID: {{ idConnection }} </span>
    <v-icon v-if="showIcon" :color="isConnected ? '#0F0' : '#F00'">
      {{ icon }}
    </v-icon>

    <v-tooltip activator="parent" location="bottom">
      {{ isConnected ? "Socket connected" : "Socket disconnected" }}
    </v-tooltip>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  icon: {
    type: String,
    default: "mdi-lightning-bolt-circle",
  },
  showId: {
    type: Boolean,
    default: false,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
});

const { $io, $getStatusConnection, $socketStore } = useNuxtApp();

const idConnection = ref();
const isConnected = ref(false);

onMounted(async () => {
  isConnected.value = $getStatusConnection().connected;

  if (isConnected.value && $socketStore) {
    idConnection.value = $io.id;
    $socketStore.connect($io.id);
    isConnected.value = true;
  } else {
    $socketStore.disconnect();
    isConnected.value = false;
  }

  $io.on("connect", () => {
    isConnected.value = true;
    $socketStore.connect($io.id);
  });

  $io.on("disconnect", () => {
    isConnected.value = false;
    $socketStore.disconnect();
  });
});
</script>
