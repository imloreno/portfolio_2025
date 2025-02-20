import React, { useId } from "react";
import { Customized } from "@models/base";

interface SectionLayoutProps extends Customized {
  children: React.ReactNode;
  id?: string;
}

const SectionLayout = ({
  children,
  style = {},
  className,
  id,
}: SectionLayoutProps) => {
  const componentId = useId();
  return (
    <section
      id={id || componentId}
      style={style}
      className={`${className} h-[100vh] 
      max-[1350px]:h-auto max-[1350px]:aspect-[16/9] `}
    >
      {children}
    </section>
  );
};

export default SectionLayout;
