import React from "react";
import { Customized, IconType } from "@models/base";
import LinkComponent from "next/link.js";
import Icon from "@components/Icon";

interface LinkProps extends Customized {
  children: React.ReactNode;
  href: string;
  icon?: string;
  target?: string;
}

const Link = ({
  href,
  children,
  className,
  target = "_self",
  icon,
}: LinkProps) => {
  return (
    <LinkComponent
      href={href}
      className={`${className} py-3 px-6 rounded-md bg-primary font-bold flex gap-x-2 items-center
      hover:scale-[1.03]`}
      target={target}
      rel="noopener noreferrer"
    >
      {icon && <Icon type={icon as IconType} className="text-[1.2em]" />}
      {children}
    </LinkComponent>
  );
};

export default Link;
