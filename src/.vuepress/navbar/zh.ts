import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
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
          "Git",
          "Docker",
          "Redis",
          "Kafka",
          "LinuxTools",
          "Kubernetes",
        ],
      },
      {
        text: "语言",
        icon: "book",
        prefix: "language/",
        children: [
          "Bash",
          "Java8",
          "JavaScript",
          "Python",
          "Swift",
        ],
      },
      {
        text: "项目",
        icon: "book",
        prefix: "project/",
        children: [
          "REST-API",
          "FastAPI",
          "Json-MsgPack",
          "SimplifyProject",
        ],
      },
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
