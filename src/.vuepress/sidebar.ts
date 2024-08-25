import { sidebar } from "vuepress-theme-hope";

export default sidebar({
    "/": [
      "",
      {
        text: "Articles",
        icon: "book",
        prefix: "posts/",
        children: "structure",
      },
      {
        text: "Projects",
        icon: "bars-progress",
        prefix: "projects/",
        children: "structure",
      },
      {
        text: "Publications",
        icon: "graduation-cap",
        prefix: "publications/",
        link: "publications/",
        children: "structure",
      },
    //   {
    //     text: "Slides",
    //     icon: "person-chalkboard",
    //     link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    //   },
    ],
  });