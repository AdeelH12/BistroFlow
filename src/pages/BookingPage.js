import { useState } from "react";

function BookTable() {

    const [name, setName] = useState();
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [guests, setGuests] = useState(0);

    function submit(e) {

        e.preventDefault();

        const values = {

            name: name,
            date: date,
            time, time,
            guests, guests
        }

        if (values) {

            fetch("http://localhost:5000/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values)
            })
            setName("");
            setDate("");
            setTime("")
            setGuests(0);
        } else {

            console.log("Form not populated")
        }


    }
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
            <h1 className="text-4xl font-serif text-[#D4AF37] mb-8">
                Book a Table
            </h1>

            <form className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">Name</label>
                    <input type="text" className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">Date</label>
                    <input type="date" className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">Time</label>
                    <input type="time" className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">Guests</label>
                    <input type="number" min="1" className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]" value={guests} onChange={(e) => setGuests(e.target.value)} />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#b8962e] transition"
                    onClick={submit}>
                    Reserve Now
                </button>
            </form>
        </section>
    );
}

export default BookTable;