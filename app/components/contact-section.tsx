"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center">CONTACT US</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Get in touch with us for more information about our services
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                📍 Address
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg font-semibold">
                27 Old Gloucester Street
                <br />
                London, WC1N 3AX
                <br />
                United Kingdom
              </p>
            </div>

            {/* Phone */}
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                📞 Phone
              </h3>
              <a
                href="tel:+441738761935"
                className="text-gray-700 text-lg font-semibold hover:text-orange-600 transition"
              >
                (+44) 07387 619358
              </a>
            </div>

            {/* Email */}
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-600">
                ✉️ Email
              </h3>
              <a
                href="mailto:info@brightdayedu.com"
                className="text-gray-700 text-lg font-semibold hover:text-green-600 transition"
              >
                info@brightdayedu.com
              </a>
            </div>

            {/* Website */}
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                🌐 Website
              </h3>
              <a
                href="https://www.brightdayedu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 text-lg font-semibold hover:text-purple-600 transition"
              >
                www.brightdayedu.com
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5951112546013!2d-0.12479782337913528!3d51.52064377181628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b36a38947e9%3A0x5267951cbc0ad430!2s27%20Old%20Gloucester%20St%2C%20London%20WC1N%203AX!5e0!3m2!1str!2suk!4v1764257245472!5m2!1str!2suk"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bright Day Education Location"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-8 py-3 font-semibold hover:bg-orange-600 transition rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
