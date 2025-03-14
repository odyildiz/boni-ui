import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  server: {
    port: 3000,
    open: true
  }
});
