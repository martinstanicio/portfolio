import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import { defaultLang } from "./src/i18n/ui";

// https://astro.build/config
export default defineConfig({
  site: process.env.VERCEL_URL || "https://martinstanicio.com",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: defaultLang,
        locales: {
          en: "en",
          es: "es",
        },
      },
    }),
  ],
});
