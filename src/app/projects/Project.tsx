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
        <div className="flex flex-wrap gap-1 pb-2">
          {tags?.map((tag) => (
            <Tag label={tag.label} key={tag.label} />
          ))}
        </div>
        <p className="pb-4"> {description}</p>
        {liveUrl && (
          <div className="p-1 w-fit hover:font-semibold">
            <a href={liveUrl} target="_blank">
              <div className="flex flex-row items-center">
                <p >View live site</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </a>
          </div>
        )}

        {repoUrl && (
          <div className="p-1 w-fit hover:font-semibold">
            <a href={repoUrl} target="_blank">
              <span className="flex flex-row  items-center">
                <p>View Github</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
