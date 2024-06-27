import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                // Persian colors
                'persian-blue': '#1c39bb',
                'persian-sky': '#0067a5',
                'persian-indigo': '#32127A',
                'persian-pink': '#f77fbe',
                'persian-orange': '#d99058',
                'persian-green': '#00a693',
                'persian-rose': '#fe28a2',
                'persian-red': '#cc3333',
                'persian-plum': '#701c1c',
            }
        }
    }
}