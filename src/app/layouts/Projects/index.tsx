import React from "react";
import Text from "@components/Text";
import styles from "./projects.module.css";
import { projectList } from "@constants/projects";
import { Project } from "@models/project";
import ProjectCard from "@components/ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="h-[100vh] grid grid-cols-2">
        <div className="relative">
          <div className={styles.line} />
          <div className="w-[60vw] h-[60vw] left-[-50%] top-[-10%] rounded-full bg-secondary absolute" />
          <div className={styles.triangle} />
        </div>
        <div className="flex flex-col justify-center items-end pr-40">
          <Text variant="title">My Trajectory</Text>
          <Text variant="subtitle" className="mt-10 text-right">
            Top <br />
            <span className="text-tertiary">3 projects</span> <br /> made by
            myself
          </Text>
        </div>
      </div>
      <section className="min-h-[100vh] my-40 relative">
        <div className="sticky w-[100vw] h-[100vh] bg-[url('/projects-bg.jpg')] bg-no-repeat bg-cover bg-bottom top-0 z-[-1] " />
        <div className="flex flex-col gap-y-40 mt-[-100vh] py-40 bg-cursorColorT2 backdrop-blur-md">
          {projectList.map((project: Project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
