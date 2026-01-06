import express from "express";
import cors from "cors";
import { auth } from "./auth.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.VITE_APP_URL || "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

// Better Auth API routes
// Better Auth handler works as Express middleware
app.use("/api/auth", async (req, res) => {
  return auth.handler(req, res);
});

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`🚀 Better Auth server running on http://localhost:${PORT}`);
  console.log(`📡 Auth API available at http://localhost:${PORT}/api/auth`);
});

