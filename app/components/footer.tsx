export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Bright Day Education</h3>
            <p className="text-gray-300">Excellence in Gifted and Talented Education</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-orange-400">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="#services" className="hover:text-orange-400">Services</a></li>
              <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <p className="text-gray-300 mb-2">📍 27 Old Gloucester St, London WC1N 3AX</p>
            <p className="text-gray-300 mb-2">📞 (+44) 07387 619358</p>
            <p className="text-gray-300">✉️ info@brightdayedu.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Bright Day Education. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
