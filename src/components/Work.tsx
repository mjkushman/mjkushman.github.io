import React from "react";
import workItems from "@/fixtures/workItems";
import WorkItem from "@/components/WorkItem";



const Work = () => {
  return (
    <div className="block max-w-xl justify-center my-4">
      <h2 className="text-xl">Work Experience</h2>
      {workItems.map((item) => <WorkItem key={item.jobTitle} {...item} /> )}
    </div>
  );
};

export default Work;
