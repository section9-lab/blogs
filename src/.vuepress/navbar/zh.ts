import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "blogs",
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
        children: ["Bash", "Java8", "Python"],
      },
      {
        text: "项目",
        icon: "book",
        prefix: "project/",
        children: ["REST-API", "FastAPI", "JsonMsgPack", "SimplifyProject"],
      },
      {
        text: "DesignPattern",
        icon: "book",
        prefix: "design/",
        children: [
          "DesignPatternsOverview",
          "DesignPatternsSingleton",
          "DesignPatternsFactory",
        ],
      },
    ],
  },
  {
    text: "Algorithm",
    icon: "book",
    prefix: "/algorithm/",
    children: ["DataStructures", "Algorithm"],
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
      "Flink-Job",
    ],
  },
  {
    text: "Cert",
    icon: "book",
    prefix: "/cert/",
    children: [
      {
        text: "CKA",
        icon: "book",
        prefix: "cka/",
        children: ["CAK_01_EnvInstall", "CAK_02_Exam"],
      },
      {
        text: "OSCP",
        icon: "book",
        prefix: "oscp/",
        children: ["OSCP_01_EnvInfo", "OSCP_02_Exam"],
      },
    ],
  },
]);
