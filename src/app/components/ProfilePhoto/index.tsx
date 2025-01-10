import Image from "next/image";
import React from "react";
import styles from "./profilePhoto.module.css";

const ProfilePhoto = () => {
  return (
    <div
      className={`borde mt-auto w-[70vw] h-[85vh] relative ${styles.container}`}
    >
      <div className={styles.squareDecorator1} />
      <div className={styles.squareDecorator2} />
      <div className={styles.squareDecorator3} />
      <Image
        src="/profile1.png"
        alt="banner"
        objectFit="contain"
        fill={true}
        className="h-[90vh] w-100 object-bottom pr-20"
      />
    </div>
  );
};

export default ProfilePhoto;
