// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        cfAnalyticsToken: ''
    },
    modules: [
        [
            'nuxt-cloudflare-analytics',
            {
                token: process.env.CF_ANALYTICS_TOKEN,
            },
        ],
    ]
})
