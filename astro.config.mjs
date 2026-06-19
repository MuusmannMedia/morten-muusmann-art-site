import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mortenmuusmann.dk",
  output: "static",
  trailingSlash: "never",
  build: {
    format: "directory",
  },
});
