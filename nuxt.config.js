module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'static-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      {
        src: "/js-static/jquery.js"
      },
      {
        src: "/js-static/scroll-desktop.js"
      },
      {
        src: "/js-static/scroll-desktop-smooth.js"
      },
      {
        src: "/js-static/jquery.themepunch.revolution.min.js"
      },
      {
        src: "/js-static/jquery.themepunch.tools.min.js"
      },
      {
        src: "/js-static/classie.js"
      },
      {
        src: "/js-static/jquery-ui-1.10.3.custom.js"
      },
      {
        src: "/js-static/counter.js"
      },
      {
        src: "/js-static/tabs.js"
      },
      {
        src: "/js-static/owl.carousel.js"
      },
      {
        src: "/js-static/jquery.mmenu.min.all.js"
      },
      // {
      //   src: "/js-static/custom.js"
      // },

    ]
  },
  css: [
    '~assets/css/medical-guide.css',
    '~assets/fonts/medical-guide-icons.css',
    '~assets/css/default-color.css',
    '~assets/css/bootstrap.css',
    '~assets/css/dropmenu.css',
    '~assets/css/sticky-header.css',
    '~assets/css/style.css',
    '~assets/css/settings.css',
    '~assets/css/extralayers.css',
    '~assets/css/accordion.css',
    '~assets/css/tabs.css',
    // '~assets/css/owl.carousel.css',
    '~assets/css/jquery.mmenu.all.css',
    '~assets/css/demo.css',
    '~assets/css/loader.css',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // vendor: ['~assets/js/tabs.js', '~assets/js/easy-responsive-tabs.js'],
    //  vendor: ["jquery"],
    //   plugins: [
    //     new webpack.ProvidePlugin({
    //       $: "jquery",
    //       jQuery: 'jquery',
    //       'window.jQuery': 'jquery'
    //     })
    //   ],

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

