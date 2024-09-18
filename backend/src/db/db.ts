import { Request, Response } from "express";
import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        const response = await mongoose.connect(process.env.MONGO_DB as string);
        console.log("Connected to the MongoDB");
    } catch (error) {
        console.log("Could not connect to database");
    }
}
