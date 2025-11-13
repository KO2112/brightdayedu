export default function ReviewsSection() {
  const reviews = [
    {
      name: "TANSU DALYAN",
      role: "Parent",
      text: "Our adaptation to new life in the UK is not so easy and we have concerns in our new lives, especially on our child's education. BDE make science learning easy for our children in her mother language and helped her adapted to this new education environment.",
    },
    {
      name: "OKAN SARUHAN",
      role: "Parent (From Turkey)",
      text: "Oglumuzun fen bilgisi derslerindeki zayifligini asmak icin ozel ogretmen arayisina girmistik. Bir arkadas tavsiyesi ile tanistigimiz BDE ve yeterlilik olarak gordugumuz sertifikalarindan sonra yardimci dersler icin BDE den hizmet aldik.",
    },
    {
      name: "Hasan TURSU",
      role: "Secondary School Teacher in USA",
      text: "I always seek and try find out new methods of education. When I saw gifted and talented study program immediately registered for online courses at BDE. And it's really impressive after 10 years of teaching I still can find and learn so many new ways of education.",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">CUSTOMER REVIEW</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Place of Mind in Knowing That Your Education on Proper Way
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="font-bold text-gray-800">{review.name}</p>
              <p className="text-gray-500 text-sm">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
