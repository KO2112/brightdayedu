export default function SpecialitySection() {
  const specialities = [
    { text: "Certificated Education", emoji: "✅" },
    { text: "Creative Education Methods", emoji: "🎨" },
    { text: "Synchronized Courses For Families and Students", emoji: "📚" },
    { text: "Active Updates and Feedbacks", emoji: "💬" },
    { text: "7/24 Support", emoji: "⏰" },
    { text: "Multilingual Education", emoji: "🌍" },
  ];

  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">OUR SPECIALITY</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 border-l-4 border-orange-500"
            >
              <div className="text-3xl">{item.emoji}</div>
              <p className="text-lg font-semibold text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
