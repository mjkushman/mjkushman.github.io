import { SiteLink } from "@/types";
import Link from "next/link";
import React from "react";

const links: SiteLink[] = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/projects",
    label: "Projects",
  },
  {
    to: "/resume",
    label: "Resume",
  },
];

const Nav = () => {
  return (
    <nav className="mt-10 mb-6 flex mx-auto justify-center">
      {links.map(({ to, label }) => {
        return (
          <Link key={to} href={to} className="mr-4 hover:text-blue-400">
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
