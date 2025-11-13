export default function AboutSection() {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2">
          Welcome to Bright Day Education
        </h2>
        <h3 className="text-2xl text-gray-600 mb-8">ABOUT OUR COMPANY</h3>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CERTIFICATED EDUCATION COURSES FOR YOU AND YOUR CHILDREN
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are offering a wide range of services especially in the light
              of our certificates taken for the education of high potential
              students, including educational counselling for gifted students or
              their families regarding their best study options that suit their
              individual needs and career aspirations. We also provide education
              consultancy in Turkish or English to families, especially citizens
              of Turkish origin living in England.
            </p>
          </div>
          <div>
            <img
              src="/ing.jpg"
              alt="Education Services"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
