import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '': {
        target: 'https://chat-app-yvbb.onrender.com'
      }
    }
  }
})
