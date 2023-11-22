import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "指南",
        icon: "book",
        prefix: "guide/",
        children: [
          "JavaScript",
          "Bash",
          "LinuxTools",
          "Docker",
          "Redis",
          "Kafka",
          "Git",
        ],
      },
      "REST-API",
      "SimplifyProject",
      "Java8",
      "Json-MsgPack",
    ],
  },
  {
    text: "设计模式",
    icon: "book",
    prefix: "/design/",
    children: [
      "01",
      "02"
    ]
  },
  {
    text: "Flink",
    icon: "book",
    prefix: "/flink/",
    children: [
      "Flink-RunTime",
      "Flink-Time"
    ]
  },
]);
