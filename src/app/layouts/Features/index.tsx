import React from "react";
import Icon from "@components/Icon";
import { IconType } from "@models/base";

const features = [
  {
    title: "Remote work",
    icon: IconType.laptop,
  },
  {
    title: "More than 30 certifications",
    icon: IconType.award,
  },
  {
    title: "Powered by AI",
    icon: IconType.copilot,
  },
  {
    title: "English and Spanish",
    icon: IconType.translate,
  },
  {
    title: "Nice soft skills",
    icon: IconType.handshake,
  },
];

const Features = () => {
  return (
    <section className={`flex w-fit mx-auto gap-x-6 mt-40 mb-32`}>
      {features.map((feature) => (
        <article key={feature.title} className="flex flex-col items-center">
          <header
            className="w-[6rem] h-[6rem] rounded-lg border border-border 
              flex items-center justify-center"
          >
            <Icon type={feature.icon} className="text-3xl text-border" />
          </header>
          <p className="w-32 text-center pt-4">{feature.title}</p>
        </article>
      ))}
    </section>
  );
};

export default Features;
