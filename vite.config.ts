import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      cache: true,
      lintOnStart: true,
    }),
    tsconfigPaths(),
  ],
  define: {
    "process.env": process.env,
  },
  server: {
    host: true,
    port: 3000,
  },
  base: "./",
});
