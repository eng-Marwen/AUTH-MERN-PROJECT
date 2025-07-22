import express from "express";
import { connectDB } from "./DB/connectDB.js"; //use .js when u import local files
import dotenv from "dotenv"; //+dotenv.config() for accessing to strings in env file
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 2000;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log("server starting on port", port);
});
