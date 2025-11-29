// <== VITE CONFIGURATION ==>
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// <== VITE CONFIGURATION ==>
export default defineConfig({
  // <== PLUGINS ==>
  plugins: [react(), tailwindcss()],
  // <== RESOLVE ==>
  resolve: {
    // <== ALIAS ==>
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
