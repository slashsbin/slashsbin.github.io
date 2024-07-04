<template><div></div></template>

<script setup lang="ts">
    useHead({
        bodyAttrs: {
            id: '!cyberRoze.md',
            class: 'group/cyberRoze',
        },
    });
</script>

<style>
    #\!cyberRoze\.md {}

    pre {
        @apply group-target/cyberRoze:font-black group-target/cyberRoze:animate-pulse;
    }

    blockquote {
        @apply group-target/cyberRoze:rotate-180;
    }

    .heart {
        @apply group-target/cyberRoze:text-2xl;
    }
</style>
