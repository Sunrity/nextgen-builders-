// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    open: true,
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 500, // optional: raise/lower warning threshold
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // All dependencies in node_modules go into vendor chunk
            return "vendor";
          }
          if (id.includes("/src/pages/")) {
            // Each page gets its own chunk
            const parts = id.split("/src/pages/");
            if (parts[1]) {
              const pageName = parts[1].split("/")[0];
              return `page-${pageName}`;
            }
          }
        },
      },
    },
  },
}));