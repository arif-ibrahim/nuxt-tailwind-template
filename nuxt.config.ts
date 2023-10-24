// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', 'nuxt-icon',],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: true,
  },
  swiper: {
    
  },
})
