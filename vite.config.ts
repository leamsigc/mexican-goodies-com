import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // Set '@' to point to the 'src' directory
    }
  },
  //  : './', // Set the packing path
  server: {
    port: 4000,
    open: true, // The browser opens automatically when the service starts
    cors: true // Allow cross-origin resource sharing
    // Configure the proxy service according to your needs
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
