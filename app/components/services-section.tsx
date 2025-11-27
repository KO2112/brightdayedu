export default function ServicesSection() {
  const services = [
    {
      title: "Science Tutoring",
      description:
        "Our main teacher and manager Mrs. Nazife Akgun has many years of experience as a full-time science teacher and personal tutor. She started tutoring out of a passion for teaching science to bright, motivated students.",
      icon: "🔬",
    },
    {
      title: "Parental Coaching / Education Analysis",
      description:
        "We are offering a wide range of services for educational counselling for gifted students or their families regarding their best study options that suit their individual needs and career aspirations.",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Gifted And Talented Education",
      description:
        "Every child is special and unique. We provide special education methods for gifted and talented students to help them realize and perform their real potential with our certified training programs.",
      icon: "⭐",
    },
  ];

  return (
    <section id="services" className="py-24 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-orange-500 transition">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="mt-6 text-orange-500 font-semibold hover:text-orange-600 hover:translate-x-2 transition inline-block">
                READ MORE →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
