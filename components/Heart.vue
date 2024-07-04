<template>
    <span class="heart">💔</span>
</template>

<style scoped>
    @keyframes heartbeat {
        0%   { transform: scale(1.1); }
        50%  { transform: scale(0.8); }
        100% { transform: scale(1); }
    }

    .heart {
        @apply inline-block cursor-none;
        transform: scale(1);
        transition: all 1s;
        animation: heartbeat 1.5s infinite ease-in-out;
    }

    .heart:hover {
        text-shadow:
            0 0 5px  theme(colors.white),
            0 0 10px theme(colors.white / 95%),
            0 0 15px theme(colors.white / 90%),
            0 0 20px theme(colors.nova  / 90%),
            0 0 30px theme(colors.nova  / 80%),
            0 0 40px theme(colors.nova  / 70%),
            0 0 50px theme(colors.nova  / 60%),
            0 0 75px theme(colors.nova  / 50%);
    }
</style>
