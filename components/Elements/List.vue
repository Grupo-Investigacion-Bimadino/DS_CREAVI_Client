<template>
    <div>
        <v-card class="mx-auto" variant="outlined">
            <v-list :items="items" item-title="name" item-value="_id" v-model:selected="selectedElement"></v-list>
        </v-card>
    </div>
</template>
<script setup>
import { useElementStore } from "~/store/element";

const elementStore = useElementStore();
const selectedElement = ref(null);

import { ref } from 'vue'
const items = ref([])

watch(
    () => selectedElement.value,
    async (newValue) => {
        if (newValue) {
            let element = await elementStore.getElementById(newValue[0]);
            elementStore.setCurrentElement(element);
        }
    }
)

onMounted(async () => {
    items.value = await elementStore.getElements();
})

</script>