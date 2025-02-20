import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "https://rnzcc-88-201-202-114.a.free.pinggy.link",
    port: 5001,
  },
});
