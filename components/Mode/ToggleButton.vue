<template>
    <v-btn-toggle v-model="toggle_exclusive" variant="outlined" class="ma-1">
        <v-btn icon @click="toggleTheme(0)">
            <v-icon>mdi-weather-sunny</v-icon>
        </v-btn>

        <v-btn icon @click="toggleTheme(1)">
            <v-icon>mdi-weather-night</v-icon>
        </v-btn>

        <v-btn icon @click="toggleTheme(2)">
            <v-icon>mdi-coffee</v-icon>
        </v-btn>
    </v-btn-toggle>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"
import { useTheme } from 'vuetify'

const theme = useTheme();
const toggle_exclusive = ref(0);

function toggleTheme(type:any) {
    switch (type) {
        case 0:
            theme.global.name.value = 'light';
            break;
        case 1:
            theme.global.name.value = 'dark';
            break;
        case 2:
            theme.global.name.value = 'customLightTheme';
            break;
    }
}

</script>

<style></style>
