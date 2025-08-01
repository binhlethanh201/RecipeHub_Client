import mongoose from "mongoose"

export async function connectDB() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error("Missing MONGODB_URI in .env")
  }

  try {
    await mongoose.connect(uri)
  } catch (err) {
    console.error("MongoDB connection error:", err)
    throw err
  }
}
