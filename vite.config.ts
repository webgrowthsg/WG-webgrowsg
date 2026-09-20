import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  ssgOptions: {
    entry: "src/entry-server.tsx",
    mock: true,
    formatting: "none",
    dirStyle: "nested",
    rootContainerId: "root",
  },
  build: {
    outDir: "dist",
    cssMinify: true,
    minify: "esbuild",
    sourcemap: false,
  },
});
