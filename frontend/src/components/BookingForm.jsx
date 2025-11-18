
import React, { useState } from "react";
import "../taj.css";
export default function BookingForm() {
  const [form, setForm] = useState({ name: "", email: "", date: "",time:"", service: "", notes: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Replace with actual customer ID and API endpoint
    const customer = "demo-customer-id";
    try {
      const res = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, customer })
      });
      const data = await res.json();
      if (res.ok) setMessage("Appointment booked successfully!");
      else setMessage(data.message || "Booking failed");
    } catch (err) {
      setMessage("Error booking appointment");
    }
  };
   const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
  ];
    const services = [
    "Basic Haircut",
    "Beard Trim",
    "Hair Color",
    "Facial",
    "Head Massage",
    "Kids Haircut",
  ];

  return (
    <div className="booking-form-wrapper">
    <div className="booking-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input name="date" type="date" value={form.date} onChange={handleChange} required />
        <select name="time" value={form.time} onChange={handleChange} required>
        <option value="">Select Time Slot</option>{timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>

<select name="service"value={form.service}onChange={handleChange}required>
            <option value="">Select Service</option>
            {services.map((s, index) => (
              <option key={index} value={s}>
                {s}
              </option>
            ))}
          </select>
        <textarea name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
        <button type="submit">Book</button>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
}
