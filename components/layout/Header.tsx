import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="bg-[#242424] text-white">
        <div className="top-menu mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-xs font-semibold sm:px-6 sm:text-sm lg:px-8">
          <a
            href="tel:+2340000000000"
            className="transition hover:text-green-200"
          >
            +234 (000) 000 0000
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <a
              href="mailto:info@shajid.edu.ng"
              className="transition hover:text-green-200"
            >
              info@shajid.edu.ng
            </a>

            <span>SHAJID College of Nursing Sciences</span>
          </div>

          <a
            href="mailto:info@shajid.edu.ng"
            className="md:hidden"
            aria-label="Email SHAJID College of Nursing Sciences"
          >
            Email Us
          </a>
        </div>
      </div>

      <div className="bg-[#152d3e]">
        <div className="mx-auto flex min-h-32 max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3"
            aria-label="SHAJID College of Nursing Sciences home"
          >
            <div className="flex h-18 w-18 items-center justify-center rounded-full border-2 border-white text-center text-xs font-bold text-white">
              SHAJID
            </div>

            <div className="hidden xl:block">
              <p className="text-lg font-bold leading-tight text-white">
                SHAJID
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-green-100">
                College of Nursing Sciences
              </p>
            </div>
          </Link>

          <Navbar />
        </div>
      </div>
    </header>
  );
}