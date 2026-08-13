export default function ServicesSection() {
  const services = [
    {
      number: "01",
      title: "Private Tutoring",
      description:
        "Personalised academic support designed around each student's abilities, goals and learning style.",
      items: [
        "Science",
        "Biology",
        "Chemistry",
        "Primary Science",
        "KS3 Science",
        "Exam Preparation",
      ],
    },
    {
      number: "02",
      title: "Education Consultancy",
      description:
        "Professional guidance to help families understand educational choices and identify the right path for their child.",
      items: [
        "Academic planning",
        "Educational pathways",
        "Subject choices",
        "School options",
        "Career aspirations",
      ],
    },
    {
      number: "03",
      title: "Parent Consultancy",
      description:
        "We help parents understand their child's needs, explore options and make confident educational decisions.",
      items: [
        "Learning needs",
        "Academic planning",
        "School selection",
        "School transition",
        "Parent-school communication",
      ],
    },
    {
      number: "04",
      title: "Gifted & Talented Education",
      description:
        "Specialist support for gifted and high-potential children who need the right environment to develop their abilities.",
      items: [
        "Identifying strengths",
        "Enrichment strategies",
        "Individual learning",
        "Advanced learning",
        "Family guidance",
      ],
    },
    {
      number: "05",
      title: "UK Education Support",
      description:
        "Clear guidance for families navigating the UK education system for the first time.",
      items: [
        "UK school stages",
        "Primary → Secondary",
        "GCSE pathways",
        "A-Level pathways",
        "School terminology",
      ],
    },
    {
      number: "06",
      title: "Bilingual Education Support",
      description:
        "English and Turkish support for families who want to communicate confidently and understand education in the UK.",
      items: [
        "English & Turkish",
        "Educational terminology",
        "School communication",
        "Parent consultations",
        "Education guidance",
      ],
    },
  ];

  return (
    <section id="services" className="bg-white px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
            What we offer
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Support that goes beyond tutoring.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From one-to-one tutoring to educational consultancy, we help
            children and families make informed decisions at every stage of
            their educational journey.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-2xl hover:shadow-slate-900/10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold tracking-widest text-orange-500">
                  {service.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-orange-500 transition group-hover:scale-150" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[96px] text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">
                  We can help with
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center text-sm font-bold text-orange-500 transition group-hover:gap-3"
              >
                Discuss your needs
                <span className="ml-2">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}