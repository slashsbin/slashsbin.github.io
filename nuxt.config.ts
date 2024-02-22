// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    telemetry: false,
    modules: [
        [
            'nuxt-cloudflare-analytics',
            {
                token: '07684a2c00274afeac7127bec28c3e3d',
            },
        ],
        '@nuxtjs/seo',
    ],
    site: {
        name: '/sβin.dev',
        url: 'https://slashsbin.dev'
    },
    robots: {
        credits: false,
    },
    sitemap: {
        autoLastmod: true,
        credits: false,
    },
})
