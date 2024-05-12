<template>
  <v-card elevation="0">
    <div class="d-flex justify-space-between">
      <v-btn-toggle variant="outlined" divided>
        <v-btn icon="mdi-note-plus" @click="newElement"></v-btn>
        <v-btn icon="mdi-content-save" @click="saveElement"></v-btn>
      </v-btn-toggle>
    </div>
  </v-card>
</template>
<script setup>
const emit = defineEmits(["saveElement", "newElement"]);

const saveElement = () => {
  emit("saveElement");
};

const newElement = () => {
  emit("newElement");
};
</script>
