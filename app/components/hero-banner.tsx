"use client";

export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold mb-4">
          WE PROVIDE
          <br />
          <span className="text-6xl">SUPPORTIVE EDUCATION</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          The Gifted and Talented Study
        </p>
        <button className="bg-orange-500 text-white px-8 py-3 font-semibold hover:bg-orange-600 transition">
          READ MORE
        </button>
      </div>
    </section>
  );
}
