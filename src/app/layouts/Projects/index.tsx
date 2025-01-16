import React from "react";
import Text from "@components/Text";
import styles from "./projects.module.css";

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
            The <br />
            companies <br /> I&apos;ve been worked on
          </Text>
        </div>
      </div>
      <section className="min-h-[100vh] my-40"></section>
    </>
  );
};

export default Projects;
