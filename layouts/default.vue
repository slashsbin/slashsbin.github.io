<template>
    <slot />
</template>

<script setup lang="ts">
    const appConfig = useAppConfig();

    useHead({
        titleTemplate: (title?: string) => title ? `${appConfig.title}/${title}` : appConfig.title,
    });

    useSeoMeta({
        description: `${ appConfig.author.name } personal website`,
    });
</script>
