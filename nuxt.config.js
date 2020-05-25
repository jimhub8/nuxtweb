import colors from 'vuetify/es5/util/colors'
import webpack from 'webpack'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=4.9.2' },
      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/plugins/revslider/public/assets/css/settings.css?ver=5.4.6.4' },
      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/plugins/js_composer/assets/lib/bower/font-awesome/css/font-awesom' },
      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/themes/transport/js/owl//assets/owl.carousel.css?ver=4.9.14' },
      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/themes/transport/css/transport.css?ver=4.9.14' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat%3A400italic%2C400%2C500%2C600%2C700%2C300&#038;subset=latin%2Clatin-' },
      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/themes/transport/style.css?ver=4.9.14' },
      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/themes/transport/css/core.css?ver=4.9.14' },


      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/themes/transport/css/wordpress.css?ver=4.9.14' },
      // { rel: 'stylesheet', href: 'http://anpsthemes.com/transport-new-demos/7/wp-content/themes/transport/custom.css?ver=4.9.14' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css' },

      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' },
      { rel: 'script', href: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
      { rel: 'script', href: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo' },
      { rel: 'script', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI' },


    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/main.css',
    '~/assets/css/styles.css',
    // '~/assets/css/transport.css',
    '~/assets/css/carousel.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/element-ui.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-material-design-icons',
    ['vue-scrollto/nuxt', { duration: 300 }],

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        '$': 'jquery',
        '_': 'lodash'
      })
    ],
    extend(config, ctx) {
    }
  }
}
