import React from "react";
import Text from "@components/Text";
import styles from "./projects.module.css";
import { contactList } from "@constants/contact";
import Icon from "@components/Icon";
import { IconType } from "@models/base";
import Image from "next/image";
import Link from "@components/Link";

const Contact = () => {
  return (
    <>
      <div className="h-[100vh] grid grid-cols-2" id="contact">
        <div className="flex flex-col justify-center ml-[12vw]">
          <Text variant="title">Contact Me</Text>
          <Text variant="subtitle" className="mt-10">
            All ways <br />
            you can contact me
          </Text>
        </div>
        <div className="relative">
          <div className="w-[15vw] h-[15vw] right-[10%] top-[35%] rounded-full bg-primary absolute z-10" />
          <div className="w-[20vh] h-[60vh] left-[20%] top-[20%] bg-secondary absolute" />
          <div className={styles.triangle} />
        </div>
      </div>
      <section className="min-h-[100vh]">
        <div className="grid grid-cols-2 gap-x-20 items-center justify-center relative max-w-[80rem] m-auto not-italic">
          <address className="flex flex-col w-fit gap-y-4 ml-auto text-2xl not-italic">
            <Text className="text-border font-bold border-b-2 border-border text-2xl">
              Contact Me
            </Text>
            {contactList.map(
              (
                contact: Record<string, string | number | boolean>,
                index: number
              ) => (
                <div key={index} className="flex items-center gap-x-4">
                  <p className="flex items-center gap-x-2 text-primary font-bold">
                    <Icon type={contact.icon as IconType} /> {contact.title}:
                  </p>
                  <Link
                    key={index}
                    href={contact.link.toString()}
                    target={contact.external ? "_blank" : "_self"}
                    className="flex gap-x-4 items-center"
                  >
                    <span>{contact.value}</span>
                  </Link>
                </div>
              )
            )}
          </address>
          <div className="w-full aspect-square relative mr-auto">
            <Image
              src="/contact.png"
              alt="Lorenzo Arias Villegas"
              fill={true}
              objectFit="contain"
              objectPosition="left"
              sizes="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
