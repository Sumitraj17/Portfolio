import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': {
        target: 'https://portfolio-server-zuv6.onrender.com:10000', // Replace with your actual API URL if necessary
        changeOrigin: true, // Enable CORS rewriting for development
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Rewrite paths for cleaner URLs
      },
    },
  },
  plugins: [react()],
})
