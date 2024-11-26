import mongoose, { Schema } from "mongoose";
import { ICategoryDTO } from "../types/category.types";

const categorySchema = new Schema<ICategoryDTO>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    categoryImg: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model<ICategoryDTO>("Category", categorySchema);

export default Category;
