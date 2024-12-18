import { TagType, Tech } from "@/types";
import React from "react";

const Tag = ({ label }: TagType): React.ReactNode => {
  const baseStyle =
    "rounded-sm text-xs mr-2 w-fit flex items-center justify-center opacity-85 decoration-2 underline underline-offset-2";
  const tagStyles: {
    [V in Tech]: string;
  } = {
    Typescript: "decoration-blue-500",
    Javascript: "decoration-yellow-500",
    Node: "decoration-green-500",
    Postgres: "",
    SQL: "",
    React: "",
    NextJS: "decoration-fuchsia-900",
    Python: "decoration-amber-700",
    MUI: "",
    Tailwind: "",
    Database: "",
    NestJS: "",
    AI: "decoration-lime-600",
    ChatGPT: "decoration-slate-700",
    Bootstrap: "",
    Express: "",
  };
  const style = `${baseStyle} ${tagStyles[label]}`;

  return <div className={style}>{label}</div>;
};

export default Tag;
