<template>
    <slot />
</template>

<script setup lang="ts">
    const appConfig = useAppConfig();

    useHead({
        titleTemplate: (title?: string) => title ? `${appConfig.title}/${title}` : appConfig.title,
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                href: '/icon.png'
            }
        ],
    });

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
</script>
