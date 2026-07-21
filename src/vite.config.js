import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 5000,
    cssMinify: false,
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})