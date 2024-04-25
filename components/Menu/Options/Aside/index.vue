<template>
  <div >
    Propiedades -- {{visible}} -- {{appStore.getShowProperties}}
    </div>
</template>
<script setup>
  import { ref } from 'vue';  
  import { useAppStore } from "~/store/app";

  const appStore = useAppStore();

  const visible = ref(appStore.getShowProperties); 
  const dialog = ref(false);  
</script>