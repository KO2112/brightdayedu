"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Get started
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              Let's talk about your child's education.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Whether you are looking for tutoring, educational guidance or
              support navigating the UK education system, we'd be happy to
              discuss your family's needs.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Phone
                </p>
                <a
                  href="tel:+447387619358"
                  className="mt-1 block text-lg font-semibold transition hover:text-orange-400"
                >
                  (+44) 07387 619358
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Email
                </p>
                <a
                  href="mailto:brightday.edu@gmail.com"
                  className="mt-1 block text-lg font-semibold transition hover:text-orange-400"
                >
                  brightday.edu@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  London
                </p>
                <p className="mt-1 text-lg font-semibold">
                  27 Old Gloucester Street
                  <br />
                  London, WC1N 3AX
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl md:p-8">
            <h3 className="text-2xl font-bold">Book a consultation</h3>

            <p className="mt-2 text-slate-500">
              Tell us a little about what you are looking for.
            </p>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:bg-white"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:bg-white"
                />
              </div>

              <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-600 outline-none transition focus:border-orange-500 focus:bg-white">
                <option value="">What can we help with?</option>
                <option>Private Tutoring</option>
                <option>Education Consultancy</option>
                <option>Parent Consultancy</option>
                <option>Gifted & Talented Education</option>
                <option>UK Education Support</option>
                <option>Bilingual Education Support</option>
              </select>

              <textarea
                placeholder="Tell us a little about your requirements..."
                rows={6}
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-orange-500 focus:bg-white"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
              >
                Send Enquiry →
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl border border-slate-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5951112546013!2d-0.12479782337913528!3d51.52064377181628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m3!1m2!1s0x48761b36a38947e9%3A0x5267951cbc0ad430!2s27%20Old%20Gloucester%20St%2C%20London%20WC1N%203AX!5e0!3m2!1str!2suk!4v1764257245472!5m2!1str!2suk"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bright Day Education Location"
          />
        </div>
      </div>
    </section>
  );
}