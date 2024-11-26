import mongoose from "mongoose";

export interface IFood {
  name: string;
  description: string;
  image: string;
  price: number;
  discount: number;
  categoryId: mongoose.Types.ObjectId;
}
