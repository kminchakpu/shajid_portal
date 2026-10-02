"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navigationLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Admissions",
    href: "/admissions",
  },
  {
    name: "Academics",
    href: "/programs",
  },
  {
    name: "Campus Life",
    href: "/campus-life",
  },
  {
    name: "News",
    href: "/news",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="hidden items-center gap-7 lg:flex xl:gap-9"
        aria-label="Main navigation"
      >
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className=" menu text-sm text-white transition hover:text-green-200 xl:text-base"
          >
            {link.name}
          </Link>
        ))}

        <Link
          href="/student"
          className="ml-2 border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#075c3a] xl:px-8 xl:text-base"
        >
          Student Portal
        </Link>
      </nav>

      <button
        type="button"
        onClick={() => setIsMenuOpen(true)}
        className="flex h-11 w-11 items-center justify-center border border-white text-white lg:hidden"
        aria-label="Open navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="block h-0.5 w-6 bg-white"></span>
        </span>
      </button>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navigationLinks}
      />
    </>
  );
}