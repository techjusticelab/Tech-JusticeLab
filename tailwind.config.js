// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                'apple-white': '#F4F2EC',
                'cerulean-blue': '#2A52BE',
                'roman-silver': '#838996',
                'dark-blue': '#00075E'
            }
        }
    },
    plugins: []
};