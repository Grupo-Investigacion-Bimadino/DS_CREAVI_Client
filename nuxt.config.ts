
// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/socket.ts',
  ],
  build: {
    transpile: ['vuetify'],
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-twemoji',
    '@nuxtjs/tailwindcss'    
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    baseURL: "/v1/",
    cdnURL: "/"
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      SOCKET_URL: process.env.SOCKET_URL,
    },
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})

