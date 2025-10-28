import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("contact");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };


  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">

        <div className="text-2xl font-serif tracking-widest text-[#D4AF37]">
          <Link to="/">Bistro<span className="text-white">Flow</span></Link>
        </div>


        <ul className="hidden md:flex space-x-10 text-lg font-light">
          <Link to="/menu"><li className="hover:text-[#D4AF37] transition duration-300 cursor-pointer">Menu</li></Link>
          <Link to="/book"><li className="hover:text-[#D4AF37] transition duration-300 cursor-pointer">Book a Table</li></Link>
          <li onClick={handleContactClick} className="hover:text-[#D4AF37] transition duration-300 cursor-pointer">Contact</li>
        </ul>


        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 text-center py-6 space-y-6 text-lg font-light animate-slideDown">
          <Link to="/" className="block hover:text-[#D4AF37]">Home</Link>
          <Link to="/menu" className="block hover:text-[#D4AF37]">Menu</Link>
          <Link to="/book" className="block hover:text-[#D4AF37]">Book A Table</Link>
          <li onClick={handleContactClick} className="hover:text-[#D4AF37] transition duration-300 cursor-pointer">Contact</li>        </div>
      )}
    </nav>
  );
}

export default Navbar;
