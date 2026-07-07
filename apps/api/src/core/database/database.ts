import mongoose from "mongoose";

export const connectDatabase = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    const connection = await mongoose.connect(mongoUri);

    console.log("✅ MongoDB Connected");
    console.log(`📍 Host: ${connection.connection.host}`);
    console.log(`🗄 Database: ${connection.connection.name}`);
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB");
    console.error(error);

    process.exit(1);
  }
};
