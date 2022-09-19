import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()]
})
