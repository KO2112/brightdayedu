"use client";

export default function HeroBanner() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-32 px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          WE PROVIDE
          <br />
          <span className="text-orange-300">SUPPORTIVE EDUCATION</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light">
          Excellence in Gifted and Talented Education
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-orange-500 text-white px-10 py-4 font-semibold hover:bg-orange-600 transition rounded-lg shadow-lg transform hover:scale-105">
            LEARN MORE
          </button>
          <button className="bg-transparent border-2 border-white text-white px-10 py-4 font-semibold hover:bg-white hover:text-blue-600 transition rounded-lg">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
}
