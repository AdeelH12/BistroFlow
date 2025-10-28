import { useEffect, useState } from "react";

function FeaturedDishes() {
  const [dishes, setDishes] = useState([]);

  //side effect to get dishes from server.js
useEffect(() => {
  fetch("/api/menu")
    .then(res => res.json())
    .then(data => setDishes(data.slice(0, 6)))
    .catch(err => console.error("Error fetching menu:", err));
}, []);
  return (
    <section className="py-20 bg-black text-white text-center">
      <h2 className="text-4xl font-serif text-[#D4AF37] mb-12">Featured Dishes</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {dishes.map(dish => (
          <div key={dish.id} className="bg-white/10 rounded-xl p-6 backdrop-blur-md hover:scale-105 transition duration-300">
            <img src={dish.image} alt={dish.name} className="rounded-lg mb-4 w-full h-56 object-cover" />
            <h3 className="text-2xl font-semibold text-[#D4AF37] mb-2">{dish.name}</h3>
            <p className="text-gray-300 mb-3">{dish.description}</p>
            <p className="text-lg font-semibold">{dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedDishes;
