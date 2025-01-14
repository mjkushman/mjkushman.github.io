import React from "react";
import Tag from "@/components/Tag";
import { Tech } from "@/types";

const Skills = () => {
  const techs: Tech[] = [
    Tech.Typescript,
    Tech.React,
    Tech.NextJS,
    Tech.Tailwind,
    Tech.NestJS,
    Tech.Express,
    Tech.Postgres,
    Tech.Javascript,
    Tech.AI,
    Tech.MUI,
    Tech.Node,
    Tech.Bootstrap,
    Tech.Python,
    Tech.SQL,
  ];

  return (
    <div className="block max-w-xl justify-center my-4">
      <h2 className="text-xl">Tech</h2>
      <div className="flex flex-row flex-wrap text-sm m-2">
        {techs.map((tech) => (
          <span key={tech} className="mr-3">
            <Tag label={tech} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
