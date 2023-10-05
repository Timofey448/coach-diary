import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.join(__dirname, './src')
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://51.250.105.185:8000",
      },
    },
  },
  plugins: [vue()]
})
