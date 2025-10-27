import HeroSection from "../components/HeroSection";
import { useEffect, useState } from "react";
import Footer from '../components/Footer';

function MenuPage() {

    const [menu, setMenu] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/api/menu")
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Data: ", data);
                setMenu(data)
                console.log(data[0].name)

            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            })
    }, [])

    return (

        <>
            <HeroSection title="View Our Exquisite Menu" showMenuButton={false}/>

            <section className="bg-black text-white py-20 px-6 md:px-16">
                <h2 className="text-4xl font-serif text-[#D4AF37] text-center mb-12">
                    Our Exquisite Menu
                </h2>

                {menu && menu.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {menu.map(dish => (
                            <div
                                key={dish.id}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="rounded-lg w-full h-56 object-cover mb-4 border border-[#D4AF37]/30"
                                />
                                <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">{dish.name}</h3>
                                <p className="text-gray-300 text-sm mb-3 italic">{dish.description}</p>
                                <p className="text-lg font-semibold text-white">{dish.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-400">Loading menu...</p>
                )}
            </section>
    

    <Footer/>
        </>

    )


}

export default MenuPage;