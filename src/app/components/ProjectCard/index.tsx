import Text from "@components/Text";
import { Project } from "@models/project";
import Image from "next/image";
import React from "react";
import styles from "./projectCard.module.css";
import Link from "@components/Link";

const additionalClassName = (shape: "circle" | "square" | "triangle") => {
  switch (shape) {
    case "circle":
      return styles.circle;
    case "square":
      return styles.square;
    case "triangle":
      return styles.triangle;
    default:
      return styles.circle;
  }
};

const ProjectCard = (props: Project) => {
  const additionalClass = additionalClassName(props.shape);

  return (
    <div
      key={props.id}
      className="flex gap-x-16 items-center max-w-[70rem] m-auto h-[20rem]"
    >
      <div className={`h-full aspect-square relative ${additionalClass}`}>
        <Image
          src={props.image}
          alt={props.name}
          fill={true}
          objectFit="cover"
          sizes="100%"
          className="overflow-visible"
        />
      </div>
      <div className="">
        <p className="text-[1.3rem] leading-tight font-semibold">#{props.id}</p>
        <p className="text-3xl underline  font-semibold text-tertiary mb-4">
          {props.name}
        </p>
        <Text className="text-2xl font-normal">{props.description}</Text>
      </div>
      <div className="flex flex-col gap-y-2 justify-center items-center">
        <Link href={`/projects/${props.id}`} icon="details">
          Details
        </Link>
        <Link href={props.github} target="_blank" icon="github">
          GitHub
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
