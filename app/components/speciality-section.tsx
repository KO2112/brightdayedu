export default function WhyBrightDaySection() {
  const reasons = [
    {
      title: "Experienced Teacher",
      text: "Experienced educational support built around real classroom and tutoring experience.",
    },
    {
      title: "Personalised Support",
      text: "Every child has different strengths, needs and goals. Our approach reflects that.",
    },
    {
      title: "Bilingual Guidance",
      text: "Support is available in English and Turkish, helping families communicate with confidence.",
    },
    {
      title: "Parent-Focused",
      text: "We don't only teach children. We help parents understand their options and make informed decisions.",
    },
    {
      title: "Regular Feedback",
      text: "Parents stay informed about progress, priorities and the next steps in their child's education.",
    },
    {
      title: "Long-Term Thinking",
      text: "We look beyond the immediate challenge and consider the wider educational journey.",
    },
  ];

  return (
    <section className="bg-slate-900 px-6 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Why Bright Day?
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              More than lessons.
              <br />
              A partner for your family.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-slate-300">
              We combine personalised teaching with practical educational
              guidance so families can move forward with greater clarity and
              confidence.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Speak to us →
            </a>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-700 bg-slate-700 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="bg-slate-900 p-7 transition hover:bg-slate-800"
              >
                <span className="text-sm font-bold text-orange-400">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-bold">{reason.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}