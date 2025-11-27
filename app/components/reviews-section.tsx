export default function ReviewsSection() {
  const reviews = [
    {
      name: "TANSU DALYAN",
      role: "Parent",
      text: "Our adaptation to new life in the UK is not so easy and we have concerns in our new lives, especially on our child's education. BDE make science learning easy for our children in her mother language and helped her adapted to this new education environment.",
      rating: 5,
    },
    {
      name: "OKAN SARUHAN",
      role: "Parent (From Turkey)",
      text: "Oglumuzun fen bilgisi derslerindeki zayifligini asmak icin ozel ogretmen arayisina girmistik. Bir arkadas tavsiyesi ile tanistigimiz BDE ve yeterlilik olarak gordugumuz sertifikalarindan sonra yardimci dersler icin BDE den hizmet aldik.",
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
