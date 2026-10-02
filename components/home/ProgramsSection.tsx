import Link from "next/link";
import ProgramCard, { type Program } from "./ProgramCard";

const programs: Program[] = [
  {
    title: "Basic Nursing",
    slug: "basic-nursing",
    description:
      "Build a strong foundation in nursing practice, patient care, clinical skills, and professional healthcare service.",
    duration: "3 Years",
    category: "Nursing",
  },
  {
    title: "Basic Midwifery",
    slug: "basic-midwifery",
    description:
      "Develop the knowledge and clinical skills needed to provide professional care for mothers, newborns, and families.",
    duration: "3 Years",
    category: "Midwifery",
  },
  {
    title: "Community Nursing",
    slug: "community-nursing",
    description:
      "Prepare to promote health, prevent illness, and provide essential nursing services within communities.",
    duration: "2 Years",
    category: "Community Health",
  },
  {
    title: "Post-Basic Nursing",
    slug: "post-basic-nursing",
    description:
      "Advance your nursing education through specialized academic study and enhanced professional clinical practice.",
    duration: "18 Months",
    category: "Post-Basic",
  },
];

export default function ProgramsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-0.5 w-10 bg-amber-400"></span>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#075c3a]">
                Academic Programs
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Our Nursing Programs
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Explore programs designed to develop knowledgeable,
              compassionate, and clinically competent nursing professionals
              prepared to serve individuals and communities.
            </p>
          </div>

          <Link
            href="/programs"
            className="inline-flex w-fit items-center gap-3 border-2 border-[#3A405A] px-6 py-3 text-sm font-semibold text-[#075c3a] transition hover:bg-[#075c3a] hover:text-white"
          >
            View All Programs
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <ProgramCard
              key={program.slug}
              program={program}
            />
          ))}
        </div>
      </div>
    </section>
  );
}