import React from "react";
import Project from "@/components/Project";
import projects from "@/fixtures/projects"
import Metrics from "@/components/Metrics";



const Projects = () => {
  return (
    <div >
      <h1 className="text-5xl font-semibold">Projects</h1>
      <div>
        {projects.map(({ title, description, liveUrl, repoUrl, tags }) => (
          <Project
            key={title}
            title={title}
            description={description}
            liveUrl={liveUrl}
            repoUrl={repoUrl}
            tags={tags}
          />
        ))}
      </div>
      <div>
        <p>API calls made to RunPod</p>
        <Metrics />
      </div>
    </div>
  );
};

export default Projects;
