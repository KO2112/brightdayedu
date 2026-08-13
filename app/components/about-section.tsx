export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f8f6] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[2rem] border border-orange-200" />

            <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-xl">
              <img
                src="/ing.jpg"
                alt="Bright Day Education"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-slate-900 px-6 py-5 text-white shadow-xl md:right-6">
              <p className="text-3xl font-bold">UK</p>
              <p className="mt-1 text-sm text-slate-300">
                Education support
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              About Bright Day Education
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Education should feel personal.
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-600">
              We provide a wide range of educational services, with a
              particular focus on high-potential and gifted students,
              personalised learning and educational guidance for families.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our approach combines teaching experience with educational
              consultancy, helping children develop their potential while
              giving parents the information and confidence they need to make
              important decisions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-bold text-slate-900">01</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Personalised education
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-bold text-slate-900">02</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  Family-focused guidance
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-bold text-slate-900">03</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  UK education expertise
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-2xl font-bold text-slate-900">04</p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  English & Turkish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}