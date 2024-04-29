// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'



export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,
        theme: {
            defaultTheme: 'light',
            themes: {
                customDarkTheme,
                customLightTheme,
            },
        },
    })
    nuxtApp.vueApp.use(vuetify)
})

const customDarkTheme = {
    dark: true,
    colors: {
        background: "#15202b",
        surface: "#15202b",
        primary: "#3f51b5",
        secondary: "#03dac6",
        error: "#ff5722",
    },
};

const customLightTheme = {
    dark: false,
    colors: {
        background: "#eee",
        surface: "#15202b",
        primary: "#3f51b5",
        secondary: "#00ccff",
        error: "#ffcc00",
    },
};
