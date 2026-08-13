export default function InternationalFamiliesSection() {
  const points = [
    "Understanding UK school stages",
    "Primary → Secondary transition",
    "GCSE and A-Level pathways",
    "School selection",
    "Educational terminology",
    "Parent-school communication",
    "Supporting children new to the UK",
    "Bilingual consultation",
  ];

  return (
    <section
      id="international"
      className="bg-orange-50 px-6 py-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-orange-600 shadow-sm">
              English & Turkish
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Moving to the UK?
              <br />
              <span className="text-orange-500">
                Understand education before making important decisions.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We help international families understand and navigate education
              in the UK, without the confusion that can come with unfamiliar
              systems, terminology and expectations.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Education can be complicated enough without a language barrier.
              Our bilingual support helps Turkish-speaking families understand
              their options and communicate confidently about their child's
              education.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex rounded-full bg-slate-900 px-7 py-4 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Book a Family Consultation →
            </a>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-orange-900/5 md:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-400">
              We can help with
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">
                    ✓
                  </span>

                  <span className="text-sm font-semibold leading-6 text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}