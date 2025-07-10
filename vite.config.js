import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://manishyadav5064.github.io/ems-frontend/",

  server: {
    port: 3000,
  },
});
