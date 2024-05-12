<template>
  <div class="btn-editor" variant="outlined" color="grey-lighten-2">
    <v-btn color="grey-lighten-2" icon class="elevation-0 rounded-lg ma-1 pa-1" size="x-small" variant="outlined"
      @click.stop="updatePropertiesOnElementPanel">
      <v-icon color="amber-darken-1">mdi-pencil</v-icon>
    </v-btn>
    <v-btn color="grey-lighten-2" icon class="elevation-0 rounded-lg ma-1 pa-1" size="x-small" variant="outlined"
      @click.stop="saveChanges">
      <v-icon color="green-darken-1">mdi-content-save</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
import { useAppStore } from "~/store/app";
import { usePropertiePanelStore } from "~/store/propertiePanel";

const appStore = useAppStore();
const appPropertiePannel = usePropertiePanelStore();

const props = defineProps({
  element: {
    type: Object,
    required: true,
  },
});


const updatePropertiesOnElementPanel = () => {
  appPropertiePannel.setElementTemp(props.element);
  appStore.openProperties();
};

const saveChanges = async () => { };
</script>

<style>
.btn-editor {
  position: absolute;
  top: 2px;
  right: 5px;
  transform: translateY(-50%);
  opacity: 0.8;
  transition: opacity 0.3s;
  background-color: transparent;
  transition: background-color 0.3s;
  border-radius: 10px;
}

.btn-editor:hover {
  background-color: white;
  opacity: 1;
}
</style>
