import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  output: "server",
  security: {
    checkOrigin: true
  },
  adapter: node({
    mode: "middleware"
  }),
  build: {
    assets: '_assets'
  }
});