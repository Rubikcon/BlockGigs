import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    include: ["eventemitter3"],
    exclude: ["ox", "@web3-onboard/walletconnect"],
    // Force Vite to include these in optimization
    esbuildOptions: {
      target: "esnext",
      // Ensure modern JS support
    },
  },

  define: {
    global: "window",
    // Some libraries expect `global`
  },

  resolve: {
    alias: {
      buffer: "buffer",
      // Ensure `buffer` is resolved properly
    },
  },
  build: {
    minify: false,
    // Disable minification to debug syntax errors

    rollupOptions: {
      external: ["ox"],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      // Fix commonjs+esm issues

      include: [/node_modules/],
      // Ensure it includes all dependencies
    },
  },
});
