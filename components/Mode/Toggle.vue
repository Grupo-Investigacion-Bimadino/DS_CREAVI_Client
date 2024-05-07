<template>
    <v-row no-gutters class="ma-1">
        <v-col cols="5">
            <div class="d-flex flex-row ">
                <v-icon class="ma-4">{{ themeSwitch.icon }}</v-icon>
                <v-switch v-model="themeSwitch.theme" @change="toggleTheme" inset>
                </v-switch>
            </div>
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
}) as any

let { name, icon } = toRefs(themeSwitch)

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
    name.value = theme.global.name.value
    icon.value = theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'
}

</script>

<style></style>
