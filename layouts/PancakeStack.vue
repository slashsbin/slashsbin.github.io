<template>
    <div>
        <NuxtLayout name="default">
            <div class="parent">
                <header class="bg-orange-300">
                    Header
                    <slot name="header" />
                </header>
                <main class="bg-indigo-300">
                    <slot />
                </main>
                <footer class="bg-emerald-300">
                    Footer Content
                    <slot name="footer" />
                </footer>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
    .parent {
        display: grid;
        grid-template-rows: auto 1fr auto;
        height: 100vh;
    }
</style>
