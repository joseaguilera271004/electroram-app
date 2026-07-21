import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 5000,
    cssMinify: false,
    minify: false,
    target: ['es2015', 'safari11'],
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})