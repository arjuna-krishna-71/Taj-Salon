import express from "express";
import Booking from "../models/Booking.js";  // Correct model

const router = express.Router();

// ------------------- CREATE APPOINTMENT -------------------
router.post("/", async (req, res) => {
  try {
    const { name, email, date, time, service, notes } = req.body;

    const booking = new Booking({
      name,
      email,
      date,
      time,
      service,
      notes,
    });

    await booking.save();

    res.status(201).json({
      message: "Appointment booked successfully!",
      booking,
    });
  } catch (err) {
    console.error("Booking Error:", err);
    res.status(500).json({
      message: "Booking failed",
      error: err.message,
    });
  }
});

// ------------------- GET ALL BOOKINGS -------------------
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
