<template>
    <!-- v-if="component" -->
    <div class="d-flex align-center flex-column">
        <h1>Component Vue page</h1>
        <v-card elevation="0" width="50vw" class="mx-auto pa-1 ma-2" variant="outlined">
            <v-card-item>
                <template v-slot:subtitle></template>
            </v-card-item>
            <v-card-actions>
                <v-row>
                    <v-col cols="12">
                        <!--CRender :component="component" /-->
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>

import { ref, onBeforeMount, computed } from "vue";
import { useRoute } from "vue-router";
import { useElementStore } from "~/store/element";
/*
const pathAPI = "http://localhost:4000/api/v1/components/";
const route = useRoute();
const id = route.params.id;
const componentStore = useComponentStore();

const component = ref({});

onBeforeMount(async () => {
    try {
        const componentData = await fetch(`${pathAPI}${id}`).then((response) => response.json());

        if (componentData) {
            componentStore.addComponent(componentData);
            const componentValue = componentStore.getComponentById(id);

            if (componentValue) {
                component.value = componentValue;
            } else {
                console.error(`No se encontró un componente con ID ${id}`);
            }
        } else {
            console.error(`No se encontraron datos para el componente con ID ${id}`);
        }
    } catch (error) {
        console.error("Error al cargar los datos desde la API:", error);
    }
});

const changeWidth = (newWidth) => {
    component.value.properties.width = newWidth;
};
*/
</script>

<style scoped></style>
~/store/element