<template>
    <slot />
</template>

<script setup lang="ts">
const route = useRoute();

useHead({
    title: () => route.meta.title
});
</script>

