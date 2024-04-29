<template>
    <v-row no-gutters class="ma-1">
        <v-col cols="5" class="align-self-center justify-center justify-center">
            <v-icon>{{ themeSwitch.icon }}</v-icon>
        </v-col>
        <v-col cols="5">
            <v-switch v-model="themeSwitch.theme" :label="themeSwitch.name" @change="toggleTheme">
            </v-switch>
        </v-col>
    </v-row>
</template>

<script lang="ts" setup>
import { toRefs } from "vue"
import { useTheme } from 'vuetify'

const theme = useTheme()

const themeSwitch = reactive({
    name: theme.global.name.value,
    icon: theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
})

let { name, icon } = toRefs(themeSwitch)

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    name.value = theme.global.name.value
    icon.value = theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
}

</script>

<style></style>
