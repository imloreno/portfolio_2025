import Menu from "@layouts/Menu";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContentLayout = ({ children }: Props) => {
  return (
    <section className="relative mt-[-6rem]">
      <Menu />
      {children}
    </section>
  );
};

export default ContentLayout;
