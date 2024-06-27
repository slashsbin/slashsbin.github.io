<template>
    <div>
        <NuxtLayout name="pancake-stack">
            <main class="bg-rose-300">
                <slot />
            </main>
        </NuxtLayout>
    </div>
</template>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
