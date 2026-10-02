"use client";

import Link from "next/link";

interface NavigationLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavigationLink[];
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close navigation menu"
      />

      <div className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-[#075c3a] p-6 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/20 pb-5">
          <div>
            <p className="text-xl font-bold text-white">SHAJID</p>
            <p className="text-xs text-green-100">
              College of Nursing Sciences
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center border border-white text-2xl text-white"
            aria-label="Close navigation menu"
          >
            ×
          </button>
        </div>

        <nav
          className="mt-7 flex flex-col"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="border-b border-white/15 py-4 text-base font-semibold text-white transition hover:pl-2 hover:text-green-200"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/student"
            onClick={onClose}
            className="mt-8 border-2 border-white px-6 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-[#075c3a]"
          >
            Student Portal
          </Link>
        </nav>
      </div>
    </div>
  );
}