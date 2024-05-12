<template>
  <div>
    <v-row justify="center">
      <v-col cols="5">
        <v-combobox
          variant="outlined"
          :items="items"
          :label="field"
          item-title="text"
          item-value="value"
          chips
          color="#1976d2"
          deletable-chips
          v-model="selectedItem.text"
          hint="Escriba una opciopm y presione enter para agregarla"
          @keydown.enter="addNewItem"></v-combobox>
      </v-col>
      <v-col cols="5">
        <v-text-field v-model="selectedItem.value" label="Valor" class="ml-2" @keydown.enter="addNewItem" hint="Escriba un valor aquí"></v-text-field>
      </v-col>
      <v-col>
        <v-btn icon color="#1976d2" @click="addNewItem">
          <v-icon>{{ selectedItemIndex === -1 ? "mdi-pencil" : "mdi-content-save" }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="items.length > 0" class="my-4">
      <v-col cols="12">
        <div class="chip-container">
          <v-chip-group v-for="(item, index) in items" :key="index" :value="item">
            <v-chip closable @click="editItem(index)" @click:close="removeItem(index)">
              {{ item.text }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  property: {
    type: Array,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
});

const items = ref(props.property);
const selectedItem = ref({ text: "", value: "" });
const selectedItemIndex = ref(-1);

const addNewItem = () => {
  if (selectedItem.value.text && selectedItem.value.value) {
    if (selectedItemIndex.value === -1) {
      items.value.push(selectedItem.value);
    } else {
      items.value[selectedItemIndex.value] = { ...selectedItem.value };
      selectedItemIndex.value = -1;
    }
    selectedItem.value = { text: "", value: "" };
  }
};

const removeItem = (index) => {
  items.value.splice(index, 1);
};

const editItem = (index) => {
  selectedItem.value = { ...items.value[index] };
  selectedItemIndex.value = index;
};
</script>

<style lang="scss" scoped>
.chip-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
</style>
