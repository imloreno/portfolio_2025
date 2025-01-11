import BannerText from "@components/BannerText";
import ProfilePhoto from "@components/ProfilePhoto";
import React from "react";

const Banner = () => {
  return (
    <section className="w-[100vw] h-[100vh] bg-background relative grid grid-cols-2 overflow-x-hidden">
      <div className="flex">
        <ProfilePhoto />
      </div>
      <div className="">
        <BannerText />
      </div>
    </section>
  );
};

export default Banner;
