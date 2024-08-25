import { defineConfig } from 'astro/config';
import lit from "@astrojs/lit";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [lit()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});