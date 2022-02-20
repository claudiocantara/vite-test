/// <reference types="vitest" />
import { defineConfig } from 'vitest/node'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
  },
})