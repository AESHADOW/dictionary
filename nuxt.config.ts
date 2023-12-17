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
            'pop-bottom': {
              initial: {
                scale: 0,
                opacity: 0,
                y: 100,
              },
              visible: {
                scale: 1,
                opacity: 1,
                y: 0,
              }
            }
          }
        }
      }
    }
})
