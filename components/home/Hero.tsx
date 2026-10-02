import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="mx-auto grid min-h-155 max-w-7xl items-center lg:grid-cols-2">
        <div className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-0.5 w-12 bg-amber-400"></span>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 sm:text-sm">
              Excellence • Compassion • Service
            </p>
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Building Tomorrow&apos;s{" "}
            <span className="text-[#075c3a]">Nursing Leaders</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            At SHAJID College of Nursing Sciences, we are committed to
            providing quality nursing education, hands-on clinical experience,
            and a supportive learning environment that prepares compassionate
            and competent healthcare professionals.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/application"
              className="inline-flex items-center justify-center gap-4 bg-[#075c3a] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#00351f] focus:outline-none focus:ring-2 focus:ring-[#075c3a] focus:ring-offset-2"
            >
              Apply for Admission
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-[#075c3a] transition hover:text-[#00351f]"
            >
              Explore Admissions
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative min-h-105 lg:min-h-full">
          <Image
            src="/images/hero.png"
            alt="Students at SHAJID College of Nursing Sciences"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 hidden h-1 w-full bg-linear-to-r from-[#075c3a] via-amber-400 to-[#075c3a] lg:block"></div>
    </section>
  );
}