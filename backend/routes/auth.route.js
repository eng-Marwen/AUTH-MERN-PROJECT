import express from "express";
import { login, logout, signup,verify } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);
router.post("/verify",verify)

export default router;
