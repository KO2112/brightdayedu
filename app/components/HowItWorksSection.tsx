export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      text: "We discuss your child's needs, goals and current situation.",
    },
    {
      number: "02",
      title: "Educational Assessment",
      text: "We identify strengths, challenges and suitable educational options.",
    },
    {
      number: "03",
      title: "Personalised Plan",
      text: "We recommend a tailored tutoring or education support plan.",
    },
    {
      number: "04",
      title: "Ongoing Support",
      text: "We monitor progress and keep parents informed throughout the process.",
    },
    {
      number: "05",
      title: "Review & Adapt",
      text: "The plan evolves as your child's needs, goals and circumstances change.",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            A clear process
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            How it works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Getting started doesn't need to be complicated. We take the time
            to understand your family before recommending the right support.
          </p>
        </div>

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative rounded-3xl border border-slate-200 bg-[#fafafa] p-6"
            >
              <span className="text-sm font-bold text-orange-500">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}