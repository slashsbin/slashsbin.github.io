<template>
    <span class="leetable" @mouseover="leetify" @mouseout="deLeetify">{{ leetable }}</span>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const props = defineProps(['text']);
    const leetable = ref(props.text);

    function leetify() {
        const leets = {
            'a': '4',
            'e': '3',
            'g': '9',
            'h': '#',
            'i': '!',
            'l': '1',
            'o': '0',
            's': '5',
            't': '7',
            'z': '%'
        };

        leetable.value = props.text.split('').map(char => leets[char] || char).join('');
    }

    function deLeetify() {
        leetable.value = props.text;
    }
</script>
