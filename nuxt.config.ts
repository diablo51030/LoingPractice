// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
    typescript: {
        typeCheck: true
    },
    runtimeConfig:{
        jwtSignSecret:'TEST'
    }
})
