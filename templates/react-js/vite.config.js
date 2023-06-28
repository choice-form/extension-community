import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: "/",
    build: { manifest: true },
    plugins: [mkcert(), react()],
    server: { https: true, port: 1337, host: '0.0.0.0' },
  };
});
