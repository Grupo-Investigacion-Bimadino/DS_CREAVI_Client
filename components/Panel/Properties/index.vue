<template>

    <v-navigation-drawer width="500" :temporary="true" class="bg-grey-darken-3">
        <v-layout style="height: 30px">
            <v-system-bar window>
                <span>Elemento</span>
                <v-spacer></v-spacer>
                <v-btn class="ms-2" icon="mdi-close" variant="text" @click.stop="close"></v-btn>
            </v-system-bar>
        </v-layout>
    </v-navigation-drawer>

</template>

<script setup>    
    import { defineEmits, watch } from 'vue';
    import { useAppStore } from "~/store/app";

const props = defineProps(['properties']);

const emit = defineEmits(['closeProperties']);
const appStore = useAppStore();

const close = () => {
    emit('closeProperties');
};

</script>
<style></style>