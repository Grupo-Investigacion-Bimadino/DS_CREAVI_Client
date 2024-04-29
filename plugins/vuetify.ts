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
    dark: false, // Tema claro
    colors: {
        // Fondo principal
        background: '#f7f5f2', // Crema claro

        // Superficie de componentes
        surface: '#a1887f', // Marrón oscuro

        // Color primario
        primary: '#6d4c41', // Marrón chocolate

        // Color secundario
        secondary: '#c0a478', // Beige

        // Color de error
        error: '#d35400', // Rojo oscuro

        // Texto primario
        primaryText: '#323232', // Negro

        // Texto secundario
        secondaryText: '#979797', // Gris oscuro

        // Texto de contraste
        contrastText: '#ffffff', // Blanco

        // Deshabilitado
        disabled: '#e0e0e0', // Gris claro

        // Divisor
        divider: '#bdbdbd', // Gris claro
    },
};
