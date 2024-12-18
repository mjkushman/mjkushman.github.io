import React from "react";
import { EducationItemType } from "@/types";

const EducationItem = (item: EducationItemType) => {
  return (
    <div className="p-3 hover:shadow-md">
      <h2 className="text-lg font-semibold mr-1">{item.schoolName}</h2>
      <div className="flex flex-row items-baseline">
        <p className="">{item.location}</p>
      </div>
      <div className="leading-relaxed">{item.description}</div>
    </div>
  );
};

export default EducationItem;
