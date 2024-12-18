import React from "react";
import workItems from "@/fixtures/workItems";
import WorkItem from "@/components/WorkItem";

const Work = () => {
  return (
    <div className="block max-w-xl justify-center my-4">
      <h2 className="text-xl">Work</h2>
      <div className="flex flex-col gap-4">
      {workItems.map((item) => (
        <WorkItem key={item.companyName} {...item} />
      ))}
      </div>
    </div>
  );
};

export default Work;
