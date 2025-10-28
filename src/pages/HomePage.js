import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturedDishes from "../components/FeaturedDishes";
import ContactPage from "./ContactPage";
import Footer from "../components/Footer";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("section") === "contact") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedDishes />
      <br />
      <ContactPage />
      <Footer />
    </>
  );
}

export default HomePage;
