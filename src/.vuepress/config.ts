import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blogs/",

  locales: {
    "/en/": {
      lang: "en-US",
      title: "Blog",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/": {
      lang: "zh-CN",
      title: "博客站点",
      description: "setion9lab的博客站点",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
