import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "book",
    prefix: "/posts/",
    children: [
    "Java8",
    "REST-API",
    "Json-MsgPack",
    "SimplifyProject",
      {
        text: "指南",
        icon: "book",
        prefix: "guide/",
        children: [
          "Bash",
          "Git",
          "Docker",
          "Redis",
          "Kafka",
          "LinuxTools",
          "JavaScript",
        ],
      }
    ],
  },
  {
    text: "数据结构",
    icon: "book",
    prefix: "/data/",
    children: [
      "DataStructures"
    ]
  },
  {
    text: "设计模式",
    icon: "book",
    prefix: "/design/",
    children: [
      "DesignPatternsOverview",
      "DesignPatternsSingleton",
      "DesignPatternsFactory"
    ]
  },
  {
    text: "Flink",
    icon: "book",
    prefix: "/flink/",
    children: [
      "Flink-RunTime",
      "Flink-Time",
      "Flink-Checkpoint",
      "Flink-YarnK8s",
      "Flink-Serializer",
      "Flink-Job"
    ]
  },
]);
