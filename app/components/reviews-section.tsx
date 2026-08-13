export default function ReviewsSection() {
  const reviews = [
    {
      name: "ALI GULER",
      role: "Parent",
      text: "Our transition to life in the UK has been exciting but also challenging, especially when it comes to our child’s education. Bright Day Education (BDE) has been a tremendous support. They make learning science in her native language enjoyable and understandable, which has really boosted her confidence at school. Thanks to BDE, she now feels much more comfortable in her new academic environment.",
    },
    {
      name: "TIMUR KARACAOGLU",
      role: "Parent (From Turkey)",
      text: "Settling into a new country has not been easy for us, and we were particularly worried about how our child would cope with the school system here in the UK. Bright Day Education (BDE) played a key role in easing this transition. By teaching science in his mother tongue, they helped her grasp concepts more quickly and adjust smoothly to his new classroom.",
    },
    {
      name: "HASAN TURSU",
      role: "Secondary School Teacher in USA",
      text: "I always seek and try find out new methods of education. When I saw gifted and talented study program immediately registered for online courses at BDE. And it's really impressive after 10 years of teaching I still can find and learn so many new ways of education.",
    },
  ];

  return (
    <section className="bg-[#f7f8f6] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Testimonials
            </p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Trusted by families and educators.
            </h2>
          </div>

          <div className="text-2xl tracking-widest text-orange-400">
            ★★★★★
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="text-4xl leading-none text-orange-300">“</div>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {review.text}
              </p>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <p className="font-bold text-slate-900">{review.name}</p>
                <p className="mt-1 text-sm font-medium text-orange-500">
                  {review.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}