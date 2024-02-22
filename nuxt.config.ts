// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    runtimeConfig: {
    },
    modules: [
        [
            'nuxt-cloudflare-analytics',
        ],
    ],
    cloudflareAnalytics: {
        token: process.env.NUXT_CF_ANALYTICS_TOKEN,
    }
})
