<template>
    <div>
        <Teleport to="body">
            <header>
                <pre>
 .----------------.            ,,..    ,,
| .--------------. |         ,MF'``A.  db
| |        __    | |         6M   .M'
| |       / /    | | ,pP"Ybd MM mmb. `7MM  `7MMpMMMb.
| |      / /     | | 8I   `" MM    Yb  MM    MM    MM
| |     / /      | | `YMMMa. MM    b8  MM    MM    MM
| |    / /       | | L.   I8 MM.   p9  MM    MM    MM
| |   /_/        | | M9mmmP' MM`bmd9'.JMML..JMML  JMML.
| |              | |         MM
| '--------------' |         MM
 '----------------'
                </pre>
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
                    <a target="_blank" href="https://github.com/slashsbin">[git]</a>
                    <a target="_blank" href="https://twitter.com/slashsbin">[twt]</a>
                    <a target="_blank" href="/slashsbin.asc">[gpg]</a>
                </section>
            </footer>
        </Teleport>
    </div>
</template>

<style>
    body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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
</style>
