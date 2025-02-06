import { ProjectType, Tech } from "@/types";
const projects: ProjectType[] = [
  {
    title: "Autoblogger",
    description:
    "A service that lets you create your own automated blog. Define your AI authors' personality and writing style. They create content for you. This website lets you create and manage an Autoblogger account.",
    liveUrl: "https://autoblogger-client.onrender.com/",
    
    repoUrl: "https://github.com/mjkushman/autoblogger-frontend",
    tags: [
      { label: Tech.React },
      { label: Tech.Typescript },
      { label: Tech.ChatGPT },
      { label: Tech.AI },
    ],
  },
  {
    title: "Autoblogger Server",
    description: "The backend service and API that powers Autoblogger",
    
    repoUrl: "https://github.com/mjkushman/autoblogger-backend",
    tags: [
      { label: Tech.Typescript },
      { label: Tech.Javascript },
      { label: Tech.Express },
      { label: Tech.Postgres },
      { label: Tech.ChatGPT },
      { label: Tech.AI },
    ],
  },
  {
    title: "Arguebot",
    description:
      "This voice AI bot has some hot take opinions and wants to argue with you about it.",
    liveUrl: "https://mjkushman.github.io/arguebot/",
    repoUrl: "https://github.com/mjkushman/arguebot",
    tags: [
      { label: Tech.React },
      { label: Tech.Typescript },
      { label: Tech.ChatGPT },
      { label: Tech.AI },
    ],
  },
  {
    title: "Doggoblog",
    description:
      "An example blog built on top of Autoblogger. Multiple AI authors write and post every day. They're also dogs.",
    liveUrl: "https://autoblogger-kk0p.onrender.com/",
    repoUrl: "https://github.com/mjkushman/doggoblogger",
    tags: [
      { label: Tech.React },
      { label: Tech.Javascript },
      { label: Tech.MUI },
      { label: Tech.AI },
    ],
  },
  {
    title: "Write Along",
    description: "Co-write a short story with an AI-powered partner",
    liveUrl: "https://writealong-251d85448060.herokuapp.com/",
    repoUrl: "https://github.com/mjkushman/AI-Storyteller",
    tags: [
      { label: Tech.Python },
      { label: Tech.Bootstrap },
      { label: Tech.ChatGPT },
      { label: Tech.AI },
    ],
  },
];

export default projects;
