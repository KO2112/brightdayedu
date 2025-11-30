export default function ReviewsSection() {
  const reviews = [
    {
      name: "ALI GULER",
      role: "Parent",
      text: "Our transition to life in the UK has been exciting but also challenging, especially when it comes to our child’s education. Bright Day Education (BDE) has been a tremendous support. They make learning science in her native language enjoyable and understandable, which has really boosted her confidence at school. Thanks to BDE, she now feels much more comfortable in her new academic environment",
      rating: 5,
    },
    {
      name: "OKAN SARUHAN",
      role: "Parent (From Turkey)",
      text: "Settling into a new country has not been easy for us, and we were particularly worried about how our child would cope with the school system here in the UK. Bright Day Education (BDE) played a key role in easing this transition. By teaching science in his mother tongue, they helped her grasp concepts more quickly and adjust smoothly to his new classroom. We are very grateful for the positive impact BDE has had on his education.",
      rating: 5,
    },
    {
      name: "Hasan TURSU",
      role: "Secondary School Teacher in USA",
      text: "I always seek and try find out new methods of education. When I saw gifted and talented study program immediately registered for online courses at BDE. And it's really impressive after 10 years of teaching I still can find and learn so many new ways of education.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">CUSTOMER REVIEWS</h2>
          <p className="text-center text-gray-600 text-lg">
            Trusted by Parents and Educators Worldwide
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800 text-lg">{review.name}</p>
                <p className="text-orange-500 text-sm font-semibold">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
