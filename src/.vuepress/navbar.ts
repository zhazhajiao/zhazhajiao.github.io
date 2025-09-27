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
  {
    text: "主页",
    icon: "home",
    link: "/zh/",
  },
  {
    text: "简历",
    icon: "circle-info",
    link: "/zh/intro",
  },
  {
    text: "博客",
    icon: "blog",
    link: "/article/",
  },
  {
    text: "项目",
    icon: "bars-progress",
    prefix: "projects/",
    children: ["dadsim"],
  },
  {
    text: "出版物",
    icon: "graduation-cap",
    link: "publications/",
  },
  {
    text: "教学",
    icon: "person-chalkboard",
    link: "http://home.ustc.edu.cn/~violinwang/ta/",
  },
]);

export { enNavbar, zhNavbar };
