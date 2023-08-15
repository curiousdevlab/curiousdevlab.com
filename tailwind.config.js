import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.jsx",
    "./resources/**/*.md",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
        },
    },
},

plugins: [typography],
}

