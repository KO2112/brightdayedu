"use client";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7f8f6] text-slate-900"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-orange-100/60 blur-3xl" />
        <div className="absolute bottom-0 -left-32 h-[350px] w-[350px] rounded-full bg-blue-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_.95fr] lg:py-32">
        {/* Copy */}
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Education support for families in the UK
          </div>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
            Personalised Education.
            <br />
            <span className="text-orange-500">Confident Parents.</span>
            <br />
            Brighter Futures.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Private tutoring, educational consultancy and parent support for
            families in the UK.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Book a Consultation
              <span className="ml-3">→</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Explore Our Services
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-200 pt-7 text-sm text-slate-500">
            <span>✓ Personalised support</span>
            <span>✓ English & Turkish</span>
            <span>✓ UK education guidance</span>
          </div>
        </div>

        {/* Visual panel */}
        <div className="relative">
          <div className="absolute -inset-5 rounded-[2rem] bg-orange-100/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-slate-900/10">
            <img
              src="/ing.jpg"
              alt="Bright Day Education"
              className="h-[430px] w-full rounded-[1.5rem] object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                Bright Day Education
              </p>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                Helping families make confident educational decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}