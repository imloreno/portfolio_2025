import Image from "next/image";
import React from "react";
import styles from "./about.module.css";
import Text from "@components/Text";

const About = () => {
  return (
    <section className="h-[100vh] bg-background grid grid-cols-2">
      <div className="flex justify-end items-center">
        <div className={`w-[50rem] h-[50rem] relative ${styles.geometric}`}>
          <Image
            src="/about_me.png"
            alt="Lorenzo Arias Villegas"
            style={{
              objectFit: "contain",
              zIndex: 1,
              filter: "drop-shadow(8px 8px 10px rgba(35, 35, 35, 0.50))",
            }}
            fill={true}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Text variant="title">About Me</Text>
        <Text variant="subtitle" className="pb-10 pt-5">
          I&apos;m <br /> Lorenzo <br /> Arias Villegas
        </Text>
        <Text className="mt-10 w-[40rem]">
          💻 Software engineer skilled in frontend development with React.js,
          TypeScript and the ecosystem around it. Also, backend solutions using
          Spring Boot with microservices. Focusing on delivering seamless user
          experiences and scalable systems, I thrive on crafting unique and
          impactful software solutions 🚀.
        </Text>
      </div>
    </section>
  );
};

export default About;
