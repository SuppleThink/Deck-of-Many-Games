// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  css: [
    'tuicss',
    '~/assets/css/main.css',
  ],
})
