<template>
    <div>
        <div class="h-px bg-gradient-to-r from-persian-green to-persian-rose"></div>
        <div class="sr-only">
            <h1 class="sr-only" lang="en-US">{{ appConfig.author.name }}'s personal website</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
    const appConfig = useAppConfig();
</script>
