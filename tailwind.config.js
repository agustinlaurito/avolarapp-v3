import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage:
        {
          'background_image': "url('/public/background.svg)"
        }

    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: '#ffffff',
          primary: {
            50: '#fef9f2',
            100: '#fcebd7',
            200: '#fbdcb9',
            300: '#f8cb97',
            400: '#f6b871',
            500: '#e7a65b',
            600: '#ce9452',
            700: '#b17f46',
            800: '#8c6437',
            900: '#523b20',
          },
          secondary: {
            50: '#e8f9fb',
            100: '#b2e8ee',
            200: '#7cd7e1',
            300: '#46c6d5',
            400: '#10b5c8',
            500: '#0d9bae',
            600: '#0a798c',
            700: '#075669',
            800: '#043447',
            900: '#011224',
          },
          success: {
            50: '#e7fae9',
            100: '#c7e7cc',
            200: '#a7d7ad',
            300: '#86c58e',
            400: '#64b46f',
            500: '#4b9b56',
            600: '#397842',
            700: '#27562f',
            800: '#15351a',
            900: '#001303',
          },
        }
      }
    }
  })],
}
