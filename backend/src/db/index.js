import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_URL}/task`,
    );
    console.log(`db connection on port ${connectionInstance.connection.host}`)
  } catch (error) {
    console.log("mongo db connection error",error);
    process.exit(1);
  }
};

export default connectDB;