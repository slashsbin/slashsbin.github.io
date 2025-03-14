// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  telemetry: false,
  compatibilityDate: '2025-01-01',

  modules: [
      // Cloudflare Analytics
      [
          'nuxt-cloudflare-analytics',
          {
              token: '07684a2c00274afeac7127bec28c3e3d',
          }
      ],
      // SEO
      '@nuxtjs/seo',
      // TailwindCSS
      [
          '@nuxtjs/tailwindcss',
          {
              exposeConfig: true,
          }
      ],
      // G Analytics
      [
          'nuxt-gtag',
          {
              id: 'G-1WY2RCYLML'
          }
      ],
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
