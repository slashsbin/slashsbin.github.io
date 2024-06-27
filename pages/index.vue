<template>
    <!-- <div class="parent"> -->
        <header>
            <pre> .----------------.            ,,..    ,,
| .--------------. |         ,MF'``A.  db
| |        __    | |         6M   .M'
| |       / /    | | ,pP"Ybd MM mmb. `7MM  `7MMpMMMb.
| |      / /     | | 8I   `" MM    Yb  MM    MM    MM
| |     / /      | | `YMMMa. MM    b8  MM    MM    MM
| |    / /       | | L.   I8 MM.   p9  MM    MM    MM
| |   /_/        | | M9mmmP' MM`bmd9'.JMML..JMML  JMML.
| |              | |         MM
| '--------------' |         MM
 '----------------'</pre>
        </header>
        <footer>
            <blockquote>
                ----------------------------------------------------------------------------------------------------
                <br>
                "All things change in a dynamic environment. Your effort to remain what you are is what limits you."
                <br>
                <i>~ Puppet Master, Ghost in the Shell (1995)</i>
                <br>
              ----------------------------------------------------------------------------------------------------
            </blockquote>
            <section>
                <a target="_blank" href="https://github.com/slashsbin">[<Leetify text="git" />]</a>
                <a target="_blank" href="https://x.com/slashsbin">[<Leetify text="twt" />]</a>
                <a target="_blank" href="/slashsbin.asc">[<Leetify text="gpg" />]</a>
            </section>
        </footer>
        <!-- </div> -->
</template>

<style scoped>
    header, footer {
        --primay-color: #fe28a2; /* Persian Rose */
        --secondary-color: #00a693; /* Persian Green */
    }

    .parent-disabled {
        display: grid;
        place-items: center;
        height: 100vh;
    }

    header {
        background: -webkit-linear-gradient(var(--secondary-color), var(--primay-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    footer {
        background: -webkit-linear-gradient(var(--primay-color), var(--secondary-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    blockquote {
        text-align: right;
    }

    section {
        text-align: center;
    }

    a:hover {
        -webkit-text-fill-color: initial;
    }
</style>

<script setup lang="ts">
    definePageMeta({
        layout: 'gentle-flex'
    });
</script>
