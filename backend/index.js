import express from "express";
import { connectDB } from "./DB/connectDB.js"; //use .js when u import local files
import dotenv from "dotenv"; //+dotenv.config() for accessing to strings in env file(do it just here)
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(express.json());//allows us to parse incomming requests:req.body (json)
app.use(cookieParser());//allows us to parse incomming cookies
const port = process.env.PORT || 2000;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log("server starting on port", port);
});
