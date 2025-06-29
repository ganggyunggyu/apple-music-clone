import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const cert = fs.readFileSync('localhost.pem');
const key = fs.readFileSync('localhost-key.pem');
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@views', replacement: '/src/views' },
      { find: '@resource', replacement: '/src/static/resource' },
    ],
  },
  server: {
    host: true,
    https: {
      key,
      cert,
    },
  },
});
