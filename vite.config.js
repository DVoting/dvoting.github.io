import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // added to resolve the process is not defined error
  define: {
    "process.env": {},
    global: {},
  },
  // added to resolve the web3 issue
  resolve: {
    alias: {
      web3: path.resolve(__dirname, "./node_modules/web3/dist/web3.min.js"),
    },
  },
  server: {
    host: true,
  },
  base: "./",
});
