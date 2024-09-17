import mongoose from "mongoose";
export const db_connection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING);
    console.log("database conneted successfully...");
  } catch (error) {
    console.log("failed to connect with database");
  }
};
