const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());


app.get("/api/menu", (req, res) => {
  fs.readFile(path.join(__dirname, "data", "menu.json"), "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading menu.json:", err);
      return res.status(500).json({ error: "Failed to load menu" });
    }

    const menu = JSON.parse(data);
    res.json(menu);
  });

});


app.post("/api/bookings", (req, res) => {

  // go to the directiory name called data, and read the booking.json file
  fs.readFile(path.join(__dirname, "data", "bookings.json"), "utf-8", (err, data) => {
    const bookingData = JSON.parse(data);
    bookingData.push(req.body);
    const updated = JSON.stringify(bookingData, null, 2);
    fs.writeFile(
      path.join(__dirname, "data", "bookings.json"),
      updated,
      "utf-8",
      () => res.json({ message: "Booking saved successfully!" })
    );
  })

})

app.post("/api/contact", (req, res) => {

  fs.readFile(path.join(__dirname, "data", "contacts.json"), "utf-8", (err, data) => {
    const contacts = JSON.parse(data);
    contacts.push(req.body);
    const contactsUpdated = JSON.stringify(contacts, null, 2);
    fs.writeFile(
      path.join(__dirname, "data", "contacts.json"),
      contactsUpdated,
      "utf-8",
      () => res.json({ message: "Message Sent" })
    );
  })

})

app.use(express.static(path.join(__dirname, "../build")));

app.use(express.static(path.join(__dirname, "../build")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
