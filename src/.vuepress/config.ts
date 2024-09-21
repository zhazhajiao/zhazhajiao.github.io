import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { getDirname, path } from "vuepress/utils";

import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Ruolin Wang",
  description: "Ruolin Wang's personal website",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  alias: {
    "@theme-hope/components/HeroInfo": path.resolve(
      __dirname,
      "./components/HeroInfo.vue",
    ),
    "@theme-hope": "vuepress-theme-hope",
  },

  plugins: [
    registerComponentsPlugin({
      components: {
        FlexSpan: path.resolve(__dirname, "./components/FlexSpan.vue"),
      }
    }),
  ],

});
