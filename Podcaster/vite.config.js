import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
  },
  server: {
    port: 5180, 
  }
});