import React from "react";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Education from "@/components/Education";

type Props = {};

const Resume = (props: Props) => {
  return (
    <div className="block max-w-xl justify-center">
      <div className="mb-4">
        <h1 className="text-5xl font-semibold tracking-wide">Mike Kushman</h1>
        <p className="font-semibold ">Full-Stack Software Engineer</p>
        <p>SF Bay Area</p>
      </div>
      <p className="text-sm">
        My journey to engineering started with growth and
        product roles. As a result I enjoy a business-aware approach to engineering. And I
        play well with marketing teams.
      </p>
      <p className="text-sm">
        My personal interests are urbanization, infrastructure, and building
        with AI.
      </p>
      <Skills />
      <Work />
      <Education/>

      
      <div>interests</div>
    </div>
  );
};

export default Resume;
