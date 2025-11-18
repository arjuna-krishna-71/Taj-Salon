// ------------------ Imports ------------------
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ------------------ Config ------------------
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------ Create App ------------------
const app = express();

// ------------------ Middlewares ------------------
app.use(cors());
app.use(express.json());

// ------------------ API Routes ------------------
import authRoutes from "./routes/auth.js";
import appointmentRoutes from "./routes/appointments.js";

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);

// ------------------ MongoDB Connection ------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ------------------ Frontend Build (Production) ------------------
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// ------------------ Start Server ------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
