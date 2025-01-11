import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav className="sticky top-2 z-[99999]">
      <ul
        className="flex gap-6 items-center justify-center w-fit m-auto text-xl h-16 px-20 
         bg-background2 rounded-lg mb-[3.1rem] border border-border"
      >
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/">
          <li>About Me</li>
        </Link>
        <Link href="/">
          <li>Experience</li>
        </Link>
        <Link href="/">
          <li>Project</li>
        </Link>
        <Link href="/">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
