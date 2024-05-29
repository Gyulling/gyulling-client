import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  base: '',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
  },

  server: {
    host: 'localhost',
    port: 3000,
    open: true,
    // 이 부분 추가함 !
    proxy: {
      '/api': {
        target: 'https://k1c436ba7077fa.user-app.krampoline.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
