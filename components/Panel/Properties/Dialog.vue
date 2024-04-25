<template>
    <div class="text-center pa-4">
        <!--v-btn @click="appStore.toggleShowProperties();">
            Open Dialog
        </v-btn-->

        <v-dialog v-model="appStore.getShowProperties" max-width="800" scrollable>
            <v-card prepend-icon="mdi-earth" title="Select Country">
                <v-divider class="mt-3"></v-divider>
                <PanelProperties />
                <v-divider></v-divider>
            </v-card>
        </v-dialog>
    </div>
</template>
<script setup>
import { useAppStore } from "~/store/app";
import { ref } from 'vue';

const appStore = useAppStore();

appStore.getShowProperties
const dialog = ref(false);
</script>