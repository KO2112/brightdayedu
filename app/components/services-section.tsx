export default function ServicesSection() {
  const services = [
    {
      title: "Science Tutoring",
      description:
        "Our main teacher and manager Mrs. Nazife Akgun has many years of experience as a full-time science teacher and personal tutor. She started tutoring out of a passion for teaching science to bright, motivated students.",
    },
    {
      title: "Parental Coaching / Education Analysis",
      description:
        "We are offering a wide range of services for educational counselling for gifted students or their families regarding their best study options that suit their individual needs and career aspirations.",
    },
    {
      title: "Gifted And Talented Education",
      description:
        "Every child is special and unique. We provide special education methods for gifted and talented students to help them realize and perform their real potential with our certified training programs.",
    },
  ];

  return (
    <section id="services" className="py-16 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">OUR SERVICES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 text-orange-500 font-semibold hover:text-orange-600">
                READ MORE →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
