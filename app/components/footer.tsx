export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-14 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold">
              Bright Day <span className="text-orange-500">Education</span>
            </h3>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Personalised education, educational consultancy and family
              support for families navigating education in the UK.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-bold transition hover:bg-orange-600"
            >
              Book a Consultation →
            </a>
          </div>

          <div>
            <h4 className="font-bold">Explore</h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-slate-400">
              <a href="#home" className="hover:text-orange-400">
                Home
              </a>
              <a href="#about" className="hover:text-orange-400">
                About Us
              </a>
              <a href="#services" className="hover:text-orange-400">
                Services
              </a>
              <a href="#international" className="hover:text-orange-400">
                International Families
              </a>
              <a href="#contact" className="hover:text-orange-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold">Contact</h4>

            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-400">
              <p>
                27 Old Gloucester Street.
                <br />
                London, WC1N 3AX
              </p>

              <a
                href="tel:+447387619358"
                className="block hover:text-orange-400"
              >
                (+44) 07387 619358
              </a>

              <a
                href="mailto:brightday.edu@gmail.com"
                className="block hover:text-orange-400"
              >
                brightday.edu@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-800 pt-7 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Bright Day Education. All Rights Reserved.</p>

          <p>Education • Guidance • Confidence</p>
        </div>
      </div>
    </footer>
  );
}