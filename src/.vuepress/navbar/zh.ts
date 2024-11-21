import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "博文",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "工具",
        icon: "book",
        prefix: "tools/",
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
        ],
      },
      {
        text: "项目",
        icon: "book",
        prefix: "project/",
        children: [
          "REST-API",
          "FastAPI",
          "JsonMsgPack",
          "SimplifyProject",
        ],
      },
    ],
  },
  {
    text: "Algorithm",
    icon: "book",
    prefix: "/algorithm/",
    children: [
      "DataStructures",
      "Algorithm",
    ]
  },
  {
    text: "DesignPattern",
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
      "Flink-FastSteps",
      "Flink-RunTime",
      "Flink-Time",
      "Flink-Checkpoint",
      "Flink-YarnK8s",
      "Flink-Serializer",
      "Flink-Job"
    ]
  },
  {
    text: "Cert",
    icon: "book",
    prefix: "/cert/",
    children: [
      "CKA",
      "CKS",
      "OSCP",
    ]
  },
]);
