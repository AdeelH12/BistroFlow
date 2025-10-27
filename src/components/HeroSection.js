import { Link } from "react-router-dom";

// Using props so the HeroSection can display different content on each page

function HeroSection({ title = "Where Flavor Meets Elegance", showMenuButton = true }) {
  return (
    <div className="relative h-[80vh] flex items-center justify-center bg-black text-white">
      <img
        src="/images/hero.jpg"
        alt="Restaurant Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-8">
          {title}
        </h1>

        <div className="space-x-4">
          {showMenuButton && (
             <Link to="/api/menu"
             className="px-6 py-3 border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
           >
            View Menu
          </Link>
          )}

              <Link to="/book"
             className="px-6 py-3 border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-black transition"
           >
            Book a Table
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
