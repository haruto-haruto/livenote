import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true
      },
    ssr: true,
    css: [
      '@/assets/css/main.css',
    ],
    modules: [
    ],
    build: {
      transpile: ['chart.js'],
      postcss: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
    server: {
      port: 3000, // default: 3000
      host: '0.0.0.0', // default: localhost,
      timing: false
    }
})

