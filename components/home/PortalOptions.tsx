import Link from "next/link";

const portalOptions = [
  {
    title: "Apply for Admission",
    label: "Prospective Student",
    description:
      "Begin your journey toward becoming a nursing professional by applying for admission to SHAJID College of Nursing Sciences.",
    href: "/application",
    icon: "application",
  },
  {
    title: "Complete Registration",
    label: "New Student",
    description:
      "Already admitted? Activate your student profile and complete your registration for the academic session.",
    href: "/new-student",
    icon: "new-student",
  },
  {
    title: "Student Portal",
    label: "Returning Student",
    description:
      "Access your student account to manage registration, courses, academic information, results, and your profile.",
    href: "/returning-student",
    icon: "student",
  },
];

function PortalIcon({ type }: { type: string }) {
  if (type === "application") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5.25H6.75A2.25 2.25 0 0 0 4.5 7.5v11.25A2.25 2.25 0 0 0 6.75 21h10.5a2.25 2.25 0 0 0 2.25-2.25V7.5a2.25 2.25 0 0 0-2.25-2.25H15"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 3.75A1.5 1.5 0 0 1 10.5 2.25h3A1.5 1.5 0 0 1 15 3.75v1.5H9v-1.5ZM8.25 10.5h7.5M8.25 14.25h7.5M8.25 18h4.5"
        />
      </svg>
    );
  }

  if (type === "new-student") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5v6M16.5 13.5h6"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
      />
    </svg>
  );
}

export default function PortalOptions() {
  return (
    <section className="bg-[#193549] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f2f6f4]">
            Get Started
          </p>

          <h2 className="mt-3 text-3xl font-bold text-amber-300 sm:text-4xl">
            Choose Your Portal
          </h2>

          <p className=" description mt-4 leading-7 text-slate-50">
            Select the option that best describes you to access the appropriate
            SHAJID College of Nursing Sciences service.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portalOptions.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group relative flex min-h-77.5 flex-col border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#075c3a]/40 hover:shadow-xl sm:p-8"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#e7f2ed] text-[#075c3a] transition group-hover:bg-[#075c3a] group-hover:text-white">
                <PortalIcon type={option.icon} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                {option.label}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#3A405A] transition group-hover:text-[#075c3a]">
                {option.title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {option.description}
              </p>

              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="text-sm font-semibold text-[#075c3a]">
                  Get Started
                </span>

                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e7f2ed] text-xl text-[#075c3a] transition group-hover:bg-[#075c3a] group-hover:text-white"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}