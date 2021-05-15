'use strict';

module.exports = {
  devServer: {
    port: 8087,
  },
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Inscreva-se grátis no evento _init(DEV) BASECAMP!'
    }
  },
  pwa: {
    name: "_(DEV) BASECAMP 1.0.0",
    themeColor: '#5659db', // The Vue color
    msTileColor: '#ffffff',
    icons: [
      {
        "src": "img/icons/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "img/icons/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "img/icons/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "img/icons/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
    }
  }
};