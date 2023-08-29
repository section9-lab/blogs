import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "指南",
        icon: "pen-to-square",
        prefix: "guide/",
        children: [
          {
            text: "bash",
            icon: "pen-to-square",
            link: "Bash",
          },
          {
            text: "Git",
            icon: "pen-to-square",
            link: "Git",
          },
          "Docker",
          "Redis",
          "LinuxTools",
          "KafkaConf",
        ],
      },
      { text: "REST-API", icon: "pen-to-square", link: "REST-API" },
      { text: "SimpleProject", icon: "pen-to-square", link: "SimpleProject" },
      "Java8-Feat",
      "Json-MsgPack",
    ],
  },
]);
