import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  function submit(e) {
    e.preventDefault();

    const details = { name, email, number, message };

    if (details.name && details.email && details.message) {
      fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      })
        .then((res) => res.json())
        .then(() => {
          setSuccess(true);
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
          setTimeout(() => setSuccess(false), 3000);
        })
        .catch((err) => console.error("Error submitting contact form:", err));
    } else {
      console.log("Form not populated");
    }
  }

  return (
    <section id="contact" className="min-h-screen flex flex-col md:flex-row items-start justify-center bg-black text-white px-6 md:px-16 py-20 space-y-10 md:space-y-0 md:space-x-16">
      <div className="md:w-1/2 text-left">
        <h2 className="text-4xl font-serif text-[#D4AF37] mb-6">BistroFlow</h2>
        <p className="text-gray-300 mb-2">📍 12 King Street, Manchester, UK</p>
        <p className="text-gray-300 mb-2">⏰ Mon – Sat: 12:00 PM – 11:00 PM</p>
        <p className="text-gray-300 mb-2">☎️ +44 123 456 789</p>
        <p className="text-gray-300 mb-6">✉️ info@bistroflow.com</p>

        <p className="text-sm text-gray-400 leading-relaxed">
          Whether you’re planning a romantic dinner, a family celebration, or a
          corporate event, we’d love to hear from you. Reach out or use the form
          to send us a message — we’ll get back to you soon!
        </p>
      </div>
      <div className="md:w-1/2 bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md">
        <h3 className="text-2xl font-serif text-[#D4AF37] mb-6 text-center">
          Contact Us
        </h3>

        <form onSubmit={submit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">E-mail</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">Number</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 text-sm font-semibold text-[#D4AF37]">Message</label>
            <textarea
              className="w-full p-2 rounded bg-black text-white border border-[#D4AF37]"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#D4AF37] text-black font-semibold rounded hover:bg-[#b8962e] transition"
          >
            Submit
          </button>
        </form>

        {success && (
          <p className="text-green-400 text-center mt-4">
           Message sent successfully!
          </p>
        )}
      </div>
    </section>
  );
}

export default ContactPage;
