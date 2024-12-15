import { TagType, Tech } from "@/types";
import React from "react";

const Tag = ({ label }: TagType): React.ReactNode => {
  const baseStyle = "border rounded-lg p-1 text-xs w-16 flex items-center justify-center";
  const tagStyles: {
    [V in Tech]: string;
  } = {
    Typescript: "text-blue-600 border-blue-500",
    Javascript: "text-yellow-600 border-yellow-500",
    Node: "text-green border-green",
    Postgres: "",
    SQL: "",
    React: "",
    NextJS: "text-fuchsia-900 border-fuchsia-900",
    Python: "text-amber-600 border-amber-700",
    MUI:"",
    Tailwind: "",
    Database: "",
    NestJS: "",
    AI: "border-lime-600 text-lime-600",
    ChatGPT: "border-slate-700 text-slate-700",
    Bootstrap:"",
    Express:"",
  };
  const style = `${baseStyle} ${tagStyles[label]}`;

  return <div className={style}>{label}</div>;
};

export default Tag;
