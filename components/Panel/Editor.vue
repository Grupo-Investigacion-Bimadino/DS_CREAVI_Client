<template>
  <v-card class="btn-editor ma-0 pa-0">
    <v-card-actions>
      <v-btn color="grey-lighten-2" icon @click.stop="updatePropertiesOnElementPanel" class="elevation-0 rounded-lg"
        size="x-small" variant="outlined">
        <v-icon color="amber-darken-1">mdi-pencil</v-icon>
      </v-btn>

      <v-btn color="grey-lighten-2" icon @click="saveChanges" class="elevation-0 rounded-lg" size="x-small"
        variant="outlined">
        <v-icon color="green-darken-1">mdi-content-save</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
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
  appStore.toggleShowProperties();
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
