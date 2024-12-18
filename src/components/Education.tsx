import React from "react";
import eduItems from "@/fixtures/eduItems";
import EducationItem from "@/components/EducationItem";

const Education = () => {
  return (
    <div className="block max-w-xl justify-center my-4">
      <h2 className="text-xl">Education</h2>
      <div className="flex flex-col gap-4">
      {eduItems.map((item) => (
        <EducationItem key={item.schoolName} {...item} />
      ))}
      </div>
    </div>
  );
};

export default Education;
