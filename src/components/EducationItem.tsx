import React from "react";
import { EducationItemType } from "@/types";

const EducationItem = (item: EducationItemType) => {
  return (
    <div className="p-3 hover:border-foreground border-l border-transparent">
      <h2 className="text-lg font-semibold mr-1">{item.schoolName}</h2>
      <div className="leading-relaxed">{item.subject}</div>
      <div className="leading-relaxed">{item.description}</div>
    </div>
  );
};

export default EducationItem;
