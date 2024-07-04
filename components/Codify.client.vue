<template>
    <div></div>
</template>

<script setup lang="ts">
    import { _colors } from '#tailwind-config/theme';

    // Browser DevToolbar banner
    console.log(
        '%c❤️ ☠️ 🤖%c/sBin.dev/#!cyberRoze.md',
        `display: inline-block; font-family: emoji; border-radius: 5px 0 0 5px; padding: 2px 10px 2px 10px; border: thin solid ${_colors['persian-green']}`,
        `display: inline-block; font-family: ui-monospace, monospace; border-radius: 0 5px 5px 0; padding: 2px 10px 2px 10px; border: thin solid ${_colors['persian-green']}; color: white; background-color: ${_colors['persian-green']}`
    );
</script>
