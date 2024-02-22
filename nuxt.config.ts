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
        token: '${{ NUXT_CF_ANALYTICS_TOKEN }}',
    }
})
