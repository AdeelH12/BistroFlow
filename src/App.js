import './App.css';
import AboutSection from './components/AboutSection';
import FeaturedDishes from './components/FeaturedDishes';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import BookingPage from "./pages/BookingPage";
import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutSection />
              <FeaturedDishes />
              <br></br>
              <ContactPage />
              <Footer />
            </>
          }
        />
        <Route path="/book" element={<BookingPage />} />
        <Route path="/api/menu" element={<MenuPage/>} />
      </Routes>
    </>
  );

}

export default App;
