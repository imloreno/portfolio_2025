import React from "react";
import Text from "@components/Text";
import styles from "./experience.module.css";
import { jobExperienceList } from "@constants/jobExperience";
import { JobBasicInformation } from "@models/jobExperience";
import Image from "next/image";
import Icon from "@components/Icon";
import { IconType } from "@models/base";

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
        <div className="relative">
          <div className="w-[55vw] h-[55vw] right-[-20%] rounded-full bg-tertiary absolute" />
          <div className="w-[50vh] h-[50vh] bottom-4 bg-primary absolute" />
          <div className={styles.triangle} />
        </div>
      </div>
      <section className="min-h-[100vh] my-40">
        <div
          className={`ml-[18vw] mt-20 flex flex-col gap-y-40 pl-[8vw] relative ${styles.experienceContainer}`}
        >
          {jobExperienceList
            .reverse()
            .map((jobExperience: JobBasicInformation) => (
              <div
                key={jobExperience.id}
                className={`flex gap-x-20 items-center h-[18rem] relative ${styles.experienceItem}`}
              >
                <div className="absolute left-[-15vw] top-[50%] translate-y-[-50%]">
                  <p>
                    {jobExperience.startDate} <br /> {jobExperience.endDate}
                  </p>
                </div>
                <div
                  className="h-full aspect-square border border-border shadow-2xl shadow-shadow rounded-lg 
                    overflow-hidden relative"
                >
                  <Image
                    src={jobExperience.profileImg}
                    alt={jobExperience.company}
                    fill={true}
                    objectFit="cover"
                    sizes="100%"
                  />
                </div>
                <div className="max-w-[30rem]">
                  <p
                    className="text-border w-fit text-[1.7vw] font-bold relative pb-2
                    before::content-[''] before:w-full before:h-[.2rem] before:bg-border before:absolute before:bottom-0 before:left-0 before:z-0"
                  >
                    {jobExperience.position}
                  </p>
                  <p className="text-[1.1vw] font-semibold mt-2 mb-4">
                    <span className="text-secondary">
                      {jobExperience.company}
                    </span>
                    {" - "}
                    <span className="text-text1">{jobExperience.type}</span>
                  </p>
                  <p className="text-[1.1vw] text-text2">
                    {jobExperience.briefDescription}
                  </p>
                  <div className="mt-2">
                    <div className="flex text-[.9vw] gap-x-6 flex-wrap">
                      {jobExperience.skills.map((skill) => (
                        <p
                          key={skill}
                          className="text-text1 font-semibold opacity-30 relative
                        after:content-[''] after:h-[.7rem] after:w-[.7rem] after:rounded-full
                        after:bg-text1 after:absolute after:top-1/2 after:right-[-1.15rem] after:translate-y-[-50%]
                        last:after:bg-transparent"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-x-4 mt-4">
                    <button
                      className="rounded-md py-2 px-6 bg-primary flex items-center gap-x-2
                      font-semibold hover:scale-[1.03]"
                    >
                      <Icon type={IconType.details} />
                      <span>Details</span>
                    </button>
                    <button
                      className="rounded-md py-2 px-6 border-border border flex items-center gap-x-2
                      font-semibold hover:scale-[1.03]"
                    >
                      <Icon type={IconType.github} />
                      <span>GitHub</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Experience;
