// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
        cloudflareAnalytics: {
            token: process.env.NUXT_CF_ANALYTICS_TOKEN,
        }
    },
    modules: [
        [
            'nuxt-cloudflare-analytics',
        ],
    ]
})
