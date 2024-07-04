<template>
    <div>
        <div class="sr-only">
            <h1 class="sr-only" lang="en-US">{{ appConfig.author.name }}'s personal website</h1>
            <h1 class="sr-only" lang="fa-IR">وب سایت شخصی {{ appConfig.author.altName }}</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
    const appConfig = useAppConfig();
</script>
