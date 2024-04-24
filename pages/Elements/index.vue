<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" sm="4">
                <ElementsCodeEditor v-model="code" />
            </v-col>
            <v-col cols="12" sm="3">
                Propiedades
            </v-col>
            <v-col cols="12" sm="5">
                <ElementsRender :element="element" />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useElementStore } from "~/store/element";

const element = computed(() => elementStore.getElement);
const elements = computed(() => elementStore.getStateElements);

// ! se debe cargar con el codigo del elemento seleccionado
const code = ref('');
const elementStore = useElementStore();

onMounted(async () => {
    // elements.value = await elementStore.getElements();
    // element.value = await elementStore.getElement;
})

</script>
