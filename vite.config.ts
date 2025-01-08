import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
});
