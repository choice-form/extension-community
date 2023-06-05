import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/rel/3f06acc0-7919-4766-ac0b-c01730b60143' : '/',
    build: { manifest: true },
    plugins: [mkcert(), react()],
    server: { https: true },
  };
});
