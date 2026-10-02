import Link from "next/link";

const admissionInformation = [
  {
    number: "01",
    title: "Admission Requirements",
    description:
      "Review the academic qualifications, supporting documents, and other requirements needed for admission into your chosen nursing program.",
    linkText: "View Requirements",
    href: "/admissions/requirements",
  },
  {
    number: "02",
    title: "How to Apply",
    description:
      "Complete your application online by providing your personal information, academic qualifications, program choice, and required documents.",
    linkText: "Application Guide",
    href: "/admissions/how-to-apply",
  },
  {
    number: "03",
    title: "Application Deadline",
    description:
      "Applications must be submitted within the announced admission period. Check the current admission schedule before submitting your application.",
    linkText: "View Admission Dates",
    href: "/admissions",
  },
];

export default function AdmissionSection() {
  return (
    <section className="relative overflow-hidden bg-[#193549] py-16 text-white sm:py-20 lg:py-24">
      <div
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full border border-white/10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-amber-400"></span>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-100">
                Admissions
              </p>
            </div>

            <h2 className="max-w-lg text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Start Your Journey at SHAJID
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-green-50/80">
              Take the first step toward a rewarding career in nursing.
              Explore our admission requirements, understand the application
              process, and submit your application to SHAJID College of
              Nursing Sciences.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/application"
                className="inline-flex items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-semibold text-[#075c3a] transition hover:bg-green-50"
              >
                Apply for Admission
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/admissions"
                className="inline-flex items-center justify-center border border-white/50 px-7 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Explore Admissions
              </Link>
            </div>
          </div>

          <div className="divide-y divide-white/15 border-y border-white/15">
            {admissionInformation.map((item) => (
              <article
                key={item.number}
                className="group grid gap-5 py-7 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:py-8"
              >
                <span className="font-play text-3xl font-bold text-amber-400">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-sm leading-7 text-green-50/70">
                    {item.description}
                  </p>
                </div>

                <Link
                  href={item.href}
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition group-hover:text-amber-300"
                >
                  {item.linkText}

                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}