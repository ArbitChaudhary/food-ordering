import { Request, Response } from "express";
import uploadOnCloudinary from "../config/cloudinary";
import Food from "../models/food.model";

export const createFood = async (req: Request, res: Response) => {
  const image = (req.file as Express.Multer.File)?.path;

  if (!image) {
    return res.status(404).json("No image found");
  }

  const imagePath = await uploadOnCloudinary(image);

  if (!imagePath) {
    return res.status(500).json({ message: "Could not  upload image" });
  }
  const foodData = {
    ...req.body,
    image: imagePath.secure_url,
  };

  try {
    const food = await Food.create(foodData);
    return res.status(200).json({ message: "Food created successfully", food });
  } catch (error) {
    return res.status(500).json({ message: "Could not create food" });
  }
};

export const getAllFood = async (req: Request, res: Response) => {
  try {
    const food = await Food.find().populate("categoryId");
    if (!food) {
      return res.status(404).json({ message: "No food items found" });
    }
    return res.status(200).json({ food });
  } catch {
    return res.status(500).json({ message: "Error finding foods" });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  const { id } = req.params;
  const item = await Food.findById(id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  try {
    await Food.findByIdAndDelete(id);

    return res.status(200).json({ message: "Food item deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting food item" });
  }
};

export const getFood = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const food = await Food.findById(id).populate("categoryId");
    if (!food) {
      return res.status(404).json({ message: "Food item not found" });
    }
    return res.status(200).json(food);
  } catch (error) {
    return res.status(500).json({ message: "Error getting food item" });
  }
};
