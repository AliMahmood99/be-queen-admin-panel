import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// Provide a web crypto polyfill for Node versions that don't expose
// globalThis.crypto.getRandomValues (fixes `crypto.getRandomValues is not a function` during build)
import { webcrypto } from 'crypto';

if (!(globalThis as any).crypto) {
  (globalThis as any).crypto = webcrypto as unknown as typeof globalThis.crypto;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
