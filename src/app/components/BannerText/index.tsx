import React from "react";
import { DateTime } from "luxon";

const BannerText = () => {
  const yearsOfExperience =
    DateTime.fromISO("2019-01-01").diffNow("years").years * -1;

  return (
    <div className="p-20 mt-[25vh]">
      <h1 className="text-[8vw] leading-[8vw] font-bold text-primary">
        Lorenzo
      </h1>
      <h2 className="text-4xl font-bold">
        Creative <span className="text-secondary">Full-Stack</span>
      </h2>
      <p className="text-xl font-semibold mt-[24vh]">
        Around {Math.round(yearsOfExperience)} years <br /> working as{" "}
        <span className="text-secondary">Frontend</span> engineer.
      </p>
    </div>
  );
};

export default BannerText;
