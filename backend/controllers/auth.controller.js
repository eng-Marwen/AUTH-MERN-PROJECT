import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import crypto from 'crypto';
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificatinMail,sendWemcomeEmail } from "../mailtrap/emails.js";
export const signup = async (req, res) => {

  let { email,lastname,name, password } = req.body;
  try {
    if (!email || !name || !password) {
      throw new Error("ALL THE FIELDS ARE REQUIRED");
    }
    const isExisted = await User.findOne({ email });
    if (isExisted) throw new Error("USER ALREADY EXISTS");
    const verificationToken =Math.floor(100000 + Math.random() * 900000);//6 digits code

    const verificationTokenExpiresAt= new Date(Date.now() + 3600 * 1000*24);

        // This sets the expiration time to 24 hour(in ms) from now

    password=await bcrypt.hash(password,10);
    let user = await User.create({
        name,
        lastname,
        email,
        password,
        verificationToken,
        verificationTokenExpiresAt
    });
    //jwt
    generateTokenAndSetCookie(res,user._id);
    await sendVerificatinMail(user.email,verificationToken)
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
export const verify=async(req,res)=>{
  //1 2 3 6 8 7 form the frontend
  try{
    const {code}=req.body;
    const user=await User.findOne({
      verificationToken:code,
      verificationTokenExpiresAt:{$gt:Date.now()}
    });
    if(!user){
      return res.status(400).json({
        status:"fail",
        message:"invalid or expired verification code"
      })
    }
    user.isVerified=true;
    user.verificationToken=undefined;
    user.verificationTokenExpiresAt=undefined
    await user.save();
    await sendWemcomeEmail(user.email,user.name);
    res.status(200).json({
      status:'success',
      message:'email verified successfully',
      data:{
        ...user._doc,
        password:undefined
        
      }
    })
  }catch(error){
    console.log("error in send verification mail")
     res.status(404).json({
      status:"failed",
      message:error.message
     });
  };

};
export const login = async (req, res) => {
  res.send("yyy 88world");
};
export const logout = async (req, res) => {
  res.send("yyy99 world");
};
