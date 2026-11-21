import 'dotenv/config';
import mongoose from "mongoose";

const connectDB = async ()=>{

    try {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

     mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err.message);
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/prescipto`)
    } 
    catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
}

export default connectDB;
