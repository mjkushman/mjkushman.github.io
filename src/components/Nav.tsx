"use client";
import { usePathname } from "next/navigation";
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
  {
    to: "/blog",
    label: "Blog",
  }
];

const Nav = () => {
  const pathname = usePathname();
  // const gridCols = `grid-cols-${links.length}`;
  return (
    
    <nav className={`pt-12 flex justify-between gap-5 m-auto w-fit`}>
      {links.map(({ to, label }) => {
        return (
          <Link
            key={to}
            href={to}
            className={`w-fit text-center gap-2 hover:underline decoration-[--primary] underline-offset-4 decoration-4 ${
              pathname == to
                ? "font-semibold decoration-4 underline underline-offset-4 decoration-[--primary]"
                : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>

  );
};

export default Nav;
