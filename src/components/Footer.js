function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-2xl font-serif text-[#D4AF37] mb-4">
          Bistro<span className="text-white">Flow</span>
        </h2>

        <p className="text-sm">📍 12 King Street, Manchester, UK</p>
        <p className="text-sm">⏰ Mon–Sat: 12:00 PM – 11:00 PM</p>
        <p className="text-sm mb-6">☎️ +44 123 456 789</p>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-[#D4AF37] transition">Instagram</a>
          <a href="#" className="hover:text-[#D4AF37] transition">Facebook</a>
          <a href="#" className="hover:text-[#D4AF37] transition">Twitter</a>
        </div>

        <div className="border-t border-gray-700 my-4 w-2/3 mx-auto"></div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} BistroFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
