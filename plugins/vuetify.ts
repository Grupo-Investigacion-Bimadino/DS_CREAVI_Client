// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        ssr: true,

    })
    nuxtApp.vueApp.use(vuetify)
})
