import { ProjectType } from "@/types/Project.type";
import React from "react";
import Tag from "./Tag";

const Project = ({
  title,
  description,
  liveUrl,
  repoUrl,
  tags,
}: ProjectType) => {
  return (
    <div className="justify-center">
      <div className="p-3 max-w-xl my-4 hover:shadow-md">
        <a className="style-none" href={liveUrl}>
          <h3 className="text-lg font-semibold">{title}</h3>
        </a>
        <p className="pb-4"> {description}</p>
        <div className="flex flex-wrap gap-1 pb-2">
          {tags?.map((tag) => {
           return  <Tag label={tag.label} key={tag.label} />;
          })}
        </div>
        {liveUrl && (
          <a href={liveUrl} target="_blank">
            {" "}
            View live site
          </a>
        )}
        {repoUrl && (
          <a href={repoUrl} target="_blank">
            {" "}
            View on Github{" "}
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
