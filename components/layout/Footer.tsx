import Link from "next/link";

const admissionLinks = [
  {
    name: "Admission Overview",
    href: "/admissions",
  },
  {
    name: "Admission Requirements",
    href: "/admissions/requirements",
  },
  {
    name: "How to Apply",
    href: "/admissions/how-to-apply",
  },
  {
    name: "Apply for Admission",
    href: "/application",
  },
];

const studentLinks = [
  {
    name: "New Student",
    href: "/new-student",
  },
  {
    name: "Returning Student",
    href: "/returning-student",
  },
  {
    name: "Student Portal",
    href: "/student",
  },
];

const programLinks = [
  {
    name: "Basic Nursing",
    href: "/programs/basic-nursing",
  },
  {
    name: "Basic Midwifery",
    href: "/programs/basic-midwifery",
  },
  {
    name: "Community Nursing",
    href: "/programs/community-nursing",
  },
  {
    name: "Post-Basic Nursing",
    href: "/programs/post-basic-nursing",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242424] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-4"
              aria-label="SHAJID College of Nursing Sciences home"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white">
                SHAJID
              </div>

              <div>
                <p className="text-xl font-bold leading-tight text-white">
                  SHAJID
                </p>

                <p className="mt-1 max-w-48 text-xs font-medium uppercase leading-5 tracking-wider text-green-100">
                  College of Nursing Sciences
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-green-50/70">
              SHAJID College of Nursing Sciences is committed to preparing
              knowledgeable, compassionate, and competent nursing
              professionals through quality education, clinical training, and
              service.
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                Contact Us
              </p>

              <address className="mt-4 space-y-3 text-sm not-italic text-green-50/70">
                <p>
                  <a
                    href="tel:+2340000000000"
                    className="transition hover:text-white"
                  >
                    +234 (000) 000 0000
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:info@shajid.edu.ng"
                    className="transition hover:text-white"
                  >
                    info@shajid.edu.ng
                  </a>
                </p>

                <p>SHAJID College of Nursing Sciences</p>
              </address>
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white">
              Admissions
            </h2>

            <div className="mt-3 h-0.5 w-8 bg-amber-400"></div>

            <ul className="mt-6 space-y-4">
              {admissionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-50/70 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white">
              Student Portal
            </h2>

            <div className="mt-3 h-0.5 w-8 bg-amber-400"></div>

            <ul className="mt-6 space-y-4">
              {studentLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-50/70 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-white">
              Our Programs
            </h2>

            <div className="mt-3 h-0.5 w-8 bg-amber-400"></div>

            <ul className="mt-6 space-y-4">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-green-50/70 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/programs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition hover:text-amber-300"
            >
              View All Programs
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className=" copyright mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm text-green-50/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>
            © {currentYear} SHAJID College of Nursing Sciences. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}