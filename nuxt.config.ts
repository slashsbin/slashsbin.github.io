// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    telemetry: false,
    runtimeConfig: {
        cfAnalyticsToken: '',
    },
    modules: [
        'nuxt-cloudflare-analytics',
    ],
    cloudflareAnalytics: {
        token: process.env.CF_ANALYTICS_TOKEN,
    }
})
