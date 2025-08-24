import mongoose from "mongoose";
export async function connectDB(uri){
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 10000, dbName: "urvann_plants" });
  console.log("✅ MongoDB connected");
}