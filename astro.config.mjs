import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://BhaveshS03.github.io",
  base: "/",
  integrations: [mdx(), sitemap(), svelte()],
});
