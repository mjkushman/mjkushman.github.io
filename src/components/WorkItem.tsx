import { WorkItemType } from "@/types";
import React from "react";

const WorkItem = (workItem: WorkItemType) => {
  return (
    <div className="p-3 hover:border-foreground border-l border-transparent">
      <div className="flex flex-row m-auto items-center">
        <div className="mr-1">{workItem.startDate}</div>{" "}
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 mr-1"
          >
            <path
              fillRule="evenodd"
              d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
              clipRule="evenodd"
            />
          </svg>
        
        <div className="mr-1"> {workItem.endDate}</div>
      </div>
      <h2 className="text-lg font-semibold mr-1">{workItem.jobTitle}</h2>
      <div className="flex flex-row items-baseline">
        <p className="text-md font-semibold mb-1">
          {workItem.companyName + " "}
        </p>
        <div className="mx-1">{" | "}</div>
        <p className="">{workItem.location}</p>
      </div>
      <div className="leading-relaxed">{workItem.description}</div>
    </div>
  );
};

export default WorkItem;
