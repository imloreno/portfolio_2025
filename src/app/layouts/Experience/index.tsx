import React from "react";
import Text from "@components/Text";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <>
      <div className="h-[100vh] grid grid-cols-2">
        <div className="flex flex-col justify-center items-start ml-[12vw]">
          <Text variant="title">My Trajectory</Text>
          <Text variant="subtitle" className="mt-10">
            The <br />
            companies <br /> I&apos;ve been worked on
          </Text>
        </div>
        <div className="">
          <div className="w-[70rem] h-[70rem] rounded-full bg-tertiary absolute" />
          <div className="w-[35rem] h-[35rem] bg-primary absolute" />
          <div className={styles.triangle} />
        </div>
      </div>
      <section className="min-h-[100vh]"></section>
    </>
  );
};

export default Experience;
