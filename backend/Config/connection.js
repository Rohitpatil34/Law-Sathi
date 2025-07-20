import mongoose from "mongoose";

const connectDB = (URI) => {
  mongoose
    .connect(URI)
    .then(() => console.log("Database Connected")) 
    .catch((error) => {
      console.error("Database connection error:", error);
    });
};

export default connectDB;