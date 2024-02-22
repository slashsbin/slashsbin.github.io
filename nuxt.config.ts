// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        cfAnalyticsToken: '',
        cloudflareAnalytics: {
            token: process.env.CF_ANALYTICS_TOKEN,
        }
    },
    modules: [
        [
            'nuxt-cloudflare-analytics',
        ],
    ]
})
