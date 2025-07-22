import mongoose from "mongoose";
const userSchma = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastname: {
      type: string,
      require: true,
    },
    email: {
      type: email,
      unique: true,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
    verificationPasswordToken: String,
    verificationPasswordTokenExpiresAt: Date
  },
  {
    timestamps: true, //to automatically set createdAt and updatedAt fields
                    //"createdAt": "2025-07-22T16:00:00.000Z",
                    //"updatedAt": "2025-07-22T16:00:00.000Z",
  }
);
export const User=mongoose.model("User",userSchma,"users");
