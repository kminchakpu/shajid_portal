import Link from "next/link";

export interface Program {
  title: string;
  slug: string;
  description: string;
  duration: string;
  category: string;
}

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({
  program,
}: ProgramCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#075c3a]/30 hover:shadow-xl">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#e7f2ed]">
        <div className="absolute left-0 top-0 h-full w-1.5 bg-[#075c3a]"></div>

        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#075c3a] shadow-sm transition duration-300 group-hover:scale-105">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-10 w-10"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5v9M7.5 12h9"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="bg-[#e7f2ed] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#075c3a]">
            {program.category}
          </span>

          <span className="text-xs font-semibold text-slate-500">
            {program.duration}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-[#075c3a]">
          {program.title}
        </h3>

        <p className="mt-3 flex-1 leading-7 text-slate-600">
          {program.description}
        </p>

        <Link
          href={`/programs/${program.slug}`}
          className="mt-6 inline-flex items-center gap-3 border-t border-slate-100 pt-5 text-sm font-semibold text-[#075c3a] transition hover:text-[#00351f]"
          aria-label={`Learn more about ${program.title}`}
        >
          View Program
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}