export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">
            Welcome to Bright Day Education
          </h2>
          <h3 className="text-2xl text-orange-500 font-semibold mb-4">ABOUT OUR COMPANY</h3>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <p className="text-lg text-orange-600 font-bold leading-relaxed mb-6">
              CERTIFICATED EDUCATION COURSES FOR YOU AND YOUR CHILDREN
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              We are offering a wide range of services especially in the light
              of our certificates taken for the education of high potential
              students, including educational counselling for gifted students or
              their families regarding their best study options that suit their
              individual needs and career aspirations.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We also provide education
              consultancy in Turkish or English to families, especially citizens
              of Turkish origin living in England.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-200 rounded-lg blur opacity-25"></div>
            <img
              src="/ing.jpg"
              alt="Education Services"
              className="w-full rounded-lg shadow-xl relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
