import React from "react";
import Project from "@/components/Project";
import projects from "@/fixtures/projects";

const Projects = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold tracking-wide mb-10">Projects</h1>
      <p>These are a few projects I&apos;ve created.</p>
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
    </div>
  );
};

export default Projects;
