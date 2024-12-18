import React from "react";
import Work from "@/components/Work";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div>
      <h1 className="text-5xl font-semibold">Mike Kushman</h1>
      <div>San Francisco Bay Area</div>
      <div>skills</div>
      <div>education</div>

      <Work />

      <div>education</div>
      <div>interests</div>
    </div>
  );
};

export default Resume;
