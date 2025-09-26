import { navbar } from "vuepress-theme-hope";

const enNavbar = navbar([
  "/",
  "/intro",
  {
    text: "Blog",
    icon: "blog",
    link: "/article/",
  },
  {
    text: "Projects",
    icon: "bars-progress",
    prefix: "projects/",
    children: ["dadsim"],
  },
  {
    text: "Publications",
    icon: "graduation-cap",
    link: "publications/",
  },
  {
    text: "TA",
    icon: "person-chalkboard",
    link: "http://home.ustc.edu.cn/~violinwang/ta/",
  },
]);

const zhNavbar = navbar([
  "/zh/",
  "/zh/intro",
  {
    text: "Blog",
    icon: "blog",
    link: "/article/",
  },
  {
    text: "Projects",
    icon: "bars-progress",
    prefix: "projects/",
    children: ["dadsim"],
  },
  {
    text: "Publications",
    icon: "graduation-cap",
    link: "publications/",
  },
  {
    text: "TA",
    icon: "person-chalkboard",
    link: "http://home.ustc.edu.cn/~violinwang/ta/",
  },
]);

export { enNavbar, zhNavbar };
