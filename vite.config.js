// import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
});
