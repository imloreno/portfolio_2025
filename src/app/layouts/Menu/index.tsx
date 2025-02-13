import Icon from "@components/Icon";
import { IconType } from "@models/base";
import Link from "next/link";
import React from "react";

const MENU_LIST = [
  {
    id: 1,
    label: "Home",
    link: "/#home",
    icon: IconType.home,
  },
  {
    id: 2,
    label: "About Me",
    link: "/#about-me",
    icon: IconType.aboutMe,
  },
  {
    id: 3,
    label: "Experience",
    link: "/#experience",
    icon: IconType.details,
  },
  {
    id: 4,
    label: "Projects",
    link: "/#projects",
    icon: IconType.projects,
  },
  {
    id: 5,
    label: "Contact",
    link: "/#contact",
    icon: IconType.phone,
  },
];

const MenuItem = ({
  link,
  icon,
  label,
}: {
  link: string;
  icon: IconType;
  label: string;
}) => {
  return (
    <Link href={link}>
      <li className="flex items-center gap-x-1 border-b-2 border-transparent hover:text-tertiary hover:border-tertiary">
        <Icon type={icon} /> {label}
      </li>
    </Link>
  );
};

const Menu = () => {
  return (
    <nav className="sticky top-2 z-10">
      <ul
        className="flex gap-6 items-center justify-center w-fit m-auto text-md h-16 px-20
        uppercase bg-background2 rounded-lg mb-[3.1rem] border border-border font-semibold"
      >
        {MENU_LIST.map(({ id, ...menuItemProps }) => {
          return <MenuItem key={id} {...menuItemProps} />;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
