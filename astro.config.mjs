// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

import pkg from "./package.json" with { type: "json" };

// https://astro.build/config
export default defineConfig({
  site: pkg.homepage,
  integrations: [mdx(), sitemap(), react()],

  adapter: cloudflare({
      platformProxy: {
          enabled: true,
      },
	}),

  vite: {
    plugins: [tailwindcss()],
  },
});