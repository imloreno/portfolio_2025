import React from "react";
import BannerText from "@components/BannerText";
import ProfilePhoto from "@components/ProfilePhoto";
import SectionLayout from "@components/SectionLayout";

const Banner = () => {
  return (
    <SectionLayout id="home" className="w-[100vw] border-b border-cursorColorT">
      <div className="h-full relative grid grid-cols-2 align-center">
        <div className="flex">
          <ProfilePhoto />
        </div>
        <div className="flex justify-start items-center">
          <BannerText />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Banner;
