<template>
    <v-card class="mx-auto ma-1" max-width="300" variant="outlined">
        <v-list lines="one" v-model:selected="selectedElement">            
            <v-list-subheader>Componentes disponibles</v-list-subheader>
            <v-list-item v-for="(item, i) in items" :key="i" :value="item._id">

                <template v-slot:prepend>
                    <v-icon :icon="item.properties.icon"></v-icon>
                </template>

                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-list-item-subtitle v-text="item.type"></v-list-item-subtitle>

            </v-list-item>
        </v-list>
    </v-card>
</template>
<script setup>
import { ref } from 'vue'
import { useElementStore } from "~/store/element";

const elementStore = useElementStore();
const selectedElement = ref(null);

const items = ref([])

watch(
    () => selectedElement.value,
    async (newValue) => {
        if (newValue) {
            await elementStore.setDefaultElementById(newValue[0]) || {};            
        }
    }
)

onMounted(async () => {
    items.value = await elementStore.getElements();        
})

</script>