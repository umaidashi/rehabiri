import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import Inspect from 'vite-plugin-inspect';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: true,
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./vitest.setup.ts'],
    },
    plugins: [
      react(),
      tsconfigPaths(),
      Inspect(),
    ],
    server: {
      port: 3000,
    },
  }
})
