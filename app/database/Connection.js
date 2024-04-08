import mongoose from "mongoose";

const connection = {
  isConnected: false  
};

export const connectToDb = async () => {

  try {
    if (connection.isConnected) {
      console.log("Already connected to the database");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to the database");
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

// This part ensures that connectToDb is called only once during server startup
let isDbConnected = false;

export const initializeDb = async () => {
  if (!isDbConnected) {
    try {
      await connectToDb();
      isDbConnected = true;
    } catch (error) {
      console.error("Failed to connect to the database:", error);
    }
  }
};