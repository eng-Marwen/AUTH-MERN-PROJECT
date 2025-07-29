import express from "express";
import { login, logout, signup,forgotPassword, verifyMail,resetPassword } from "../controllers/auth.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email",verifyMail);
router.post("/forgot-password",forgotPassword)
router.post("/reset-password",resetPassword)

export default router;
