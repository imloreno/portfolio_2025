import { Customized } from "@models/base";
import React from "react";

interface Props extends Customized {
  children: React.ReactNode;
  variant?: "default" | "title" | "subtitle";
}

const Text = ({ className, style, children, variant = "default" }: Props) => {
  switch (variant) {
    case "title":
      return (
        <h1
          className="text-primary font-semibold text-[1.3vw] relative w-fit
            after:content-[''] after:block after:w-full after:h-1 after:bg-primary after:mt-1"
          style={style}
        >
          <span className={className}>{children}</span>
        </h1>
      );
    case "subtitle":
      return (
        <h2
          className={`text-text1 font-bold text-[3vw] leading-tight ${className}`}
          style={style}
        >
          {children}
        </h2>
      );
    default:
      return (
        <p className={`text-text1 text-[1.3vw]`} style={style}>
          <span className={className}>{children}</span>
        </p>
      );
  }
};

export default Text;
