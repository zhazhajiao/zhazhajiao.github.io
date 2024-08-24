import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/intro",
  {
    text: "Blog",
    icon: "blog",
    link: "/article/",
  },
]);
