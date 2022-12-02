// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    telemetry: false,
    css: [
        '~/assets/css/main.scss',
    ],
    app: {
        head: {
            title: 'SexInfo',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'Site de prévention sur les IST' },
            ],
            htmlAttrs: {
                lang: 'fr',
            }
        },
    },
    dir: {
        static: 'public',
        public: 'public',
    }
})
