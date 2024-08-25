import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Ruolin Wang",
  description: "Ruolin Wang's personal website",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
