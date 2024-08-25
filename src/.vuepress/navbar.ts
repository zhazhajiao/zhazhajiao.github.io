import { navbar } from "vuepress-theme-hope";

export default navbar([
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
