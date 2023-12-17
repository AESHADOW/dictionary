// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@vueuse/motion/nuxt'],
  app: {
    head: {
      link: [
        // Include Google Fonts Material Icons CDN
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0' },
        // ...other link tags
      ],
    },
  },
  
    // nuxt.motion config
    runtimeConfig: {
      public: {
        motion: {
          directives: {
            'enter-left': {
              initial: {
                scale: 0,
                opacity: 0,
                x: -100,
              },
              enter: {
                scale: 1,
                opacity: 1,
                x: 0,
              }
            }
          }
        }
      }
    }
})
