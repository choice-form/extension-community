import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    base: "/",
    build: { manifest: true },
    plugins: [mkcert()],
    server: { https: true, port: 1337 },
  };
});
