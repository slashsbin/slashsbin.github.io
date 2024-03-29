<template>
    <slot />
</template>

<style>
    :root {
        --primay-color: #f694ff;
        --secondary-color: #a277ff;
        --background-color: #15141b;
    }

    body {
        margin: 0;
        font-family: monospace;
        font-size: large;
        background: var(--background-color);
    }

    a {
        text-decoration: none;
    }

    a:hover {
        -webkit-text-fill-color: initial;
        color: var(--primay-color);
    }
</style>

<script setup lang="ts">
    const appConfig = useAppConfig();

    // Security Headers
    useHead({
        meta: [
            {
                'http-equiv': 'content-security-policy',
                content: "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; connect-src 'self' https://cloudflareinsights.com; child-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self'",
            },
            {
                'http-equiv': 'referrer-policy',
                content: 'strict-origin-when-cross-origin',
            },
        ],
    });

    // General
    useHead({
        titleTemplate: (title?: string) => title ? `${appConfig.title}/${title}` : appConfig.title,
    });

    // SEO
    useSeoMeta({
        description: `${ appConfig.author.name } personal website`,
        colorScheme: 'dark',
        author: appConfig.author.name,
        profileUsername: appConfig.author.username,
        ogType: 'website',
        ogImageUrl: '/noise.png',
        ogImageType: 'image/png',
        twitterCard: 'summary',
        twitterCreator: appConfig.author.username,
        themeColor: {
            color: appConfig.theme.color,
            media: '(prefers-color-scheme: dark)',
        },
    });

    useSchemaOrg([
        definePerson({
            name: appConfig.author.name,
            additionalName: appConfig.author.username,
            alternateName: appConfig.author.altName,
            image: appConfig.author.image,
            sameAs: [
                'https://github.com/slashsbin',
                'https://twitter.com/slashsbin',
            ],
        }),
    ]);

    // Etc, Metadata
    useHead({
        link: [
            { rel: 'me', href: 'https://github.com/slashsbin' },
            { rel: 'me', href: 'https://twitter.com/slashsbin' },
            { rel: 'me', href: 'https://mastodon.social/@slashsbin' },
            { rel: 'me', href: 'https://www.linkedin.com/in/slashsbin' },
        ],
    });
</script>
