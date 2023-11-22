import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "文集",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "slides",
  ],
});
