import mongoose from "mongoose";
import asyncHandler from "../middlewares/asyncHandler.js";

const connectDB = async () => {

  if (!process.env.DB_URI) {
    console.error("DB_URI is not defined in environment variables");
    return;
  };

  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected...");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  };
};

export default connectDB;