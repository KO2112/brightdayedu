export default function SpecialitySection() {
  const specialities = [
    "Certificated Education",
    "Creative Education Methods",
    "Synchronized Courses For Families and Students",
    "Active Updates and Feedbacks",
    "7/24 Support",
    "Multilingual Education",
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">OUR SPECIALITY</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {specialities.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <p className="text-lg font-semibold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
