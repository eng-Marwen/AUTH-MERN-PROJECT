import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import crypto from 'crypto';
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signup = async (req, res) => {

  let { email,lastname,name, password } = req.body;
  try {
    if (!email || !name || !password) {
      throw new Error("ALL THE FIELDS ARE REQUIRED");
    }
    const isExisted = await User.findOne({ email });
    if (isExisted) throw new Error("USER ALREADY EXISTS");
    const verificationPasswordToken = crypto.randomBytes(10).toString('hex');
    const verificationPasswordTokenExpiresAt= new Date(Date.now() + 3600 * 1000*24);
        // This sets the expiration time to 24 hour(in ms) from now

    password=await bcrypt.hash(password,10);
    let user = await User.create({
        name,
        lastname,
        email,
        password,
        verificationPasswordToken,
        verificationPasswordTokenExpiresAt
    });
    //jwt
    generateTokenAndSetCookie(res,user._id);

    res.status(201).json({
      status: "success",
      message: "user created successfully",
      data:{
        ...user._doc,
        password:undefined
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message:error.message
    });
  }
};
export const login = async (req, res) => {
  res.send("yyy 88world");
};
export const logout = async (req, res) => {
  res.send("yyy99 world");
};
