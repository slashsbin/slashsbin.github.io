<template>
    <div class="pancake-stack h-dvh">
        <Header />
        <div class="gentle-flex container mx-auto">
            <Codify /><CyberRoze />
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup lang="ts">
    const appConfig = useAppConfig();

    // Security Headers
    if (!import.meta.dev) {
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
    }

    // General
    useHead({
        titleTemplate: (title?: string) => title ? `${appConfig.title}/${title}` : appConfig.title,
    });

    // SEO
    useSeoMeta({
        description: `${ appConfig.author.name }'s personal website`,
        colorScheme: 'dark',
        author: appConfig.author.name,
        profileUsername: appConfig.author.username,
        ogType: 'website',
        ogImageUrl: '/noise.png',
        ogImageType: 'image/png',
        themeColor: {
            color: appConfig.theme.color,
            media: '(prefers-color-scheme: dark)',
        },
    });

    useSchemaOrg([
        definePerson({
            name: appConfig.author.name,
            alternateName: appConfig.author.altName,
            additionalName: appConfig.author.username,
            image: appConfig.author.image,
            jobTitle: appConfig.author.jobTitle,
            email: appConfig.author.email,
            url: appConfig.url,
            sameAs: [
                'https://github.com/slashsbin',
                'https://www.linkedin.com/in/slashsbin',
            ],
        }),
    ]);

    // Etc, Metadata
    useHead({
        link: [
            { rel: 'me', href: 'https://github.com/slashsbin' },
            { rel: 'me', href: 'https://www.linkedin.com/in/slashsbin' },
        ],
    });
</script>
