import { NextFunction, Request, Response } from "express";
import uploadOnCloudinary from "../config/cloudinary";
import Category from "../models/category.models";

interface RequestFiles {
  categoryImg?: Express.Multer.File;
}

export const createCategory = async (req: Request, res: Response) => {
  try {
    const categoryImgLocalPath = (req.file as Express.Multer.File)?.path;
    if (!categoryImgLocalPath) {
      return res.status(404).json({ message: "image not found" });
    }
    const categoryImage = await uploadOnCloudinary(categoryImgLocalPath);
    if (!categoryImage) {
      return res
        .status(400)
        .json({ message: "Error uploading image to cloudinary" });
    }

    const categoryData = {
      ...req.body,
      categoryImg: categoryImage.secure_url,
    };
    const category = await Category.create(categoryData);
    return res
      .status(200)
      .json({ message: "Category created successfully", category });
  } catch (error: any) {
    return res.status(500).json({ message: "Could not create category" });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    return res
      .status(200)
      .json({ message: "Categories retrieved", categories });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error retrieving categories", error });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId) {
      return res.status(400).json({ message: "Category id not found" });
    }
    const category = await Category.findById({ _id: categoryId });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json(category);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching category" });
  }
};

export const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "Category Id not found" });
    }
    const response = await Category.findById({ _id: id });
    if (!response) {
      return res.status(404).json({ message: "Category not found" });
    }
    let categoryImage;
    if (req.file) {
      const categoryImgLocalPath = (req.file as Express.Multer.File).path;
      // next()
      if (!categoryImgLocalPath) {
        // return res.status(404).json({ message: "image not found" });
      }
      categoryImage = await uploadOnCloudinary(categoryImgLocalPath);
      if (!categoryImage) {
        return res
          .status(400)
          .json({ message: "Error uploading image to cloudinary" });
      }
    }

    const changedData = {
      ...req.body,
      categoryImg: categoryImage?.secure_url,
    };
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      changedData,
      {
        new: true,
      }
    );
    return res.status(200).json({ message: "Category Updated", category });
  } catch (error) {
    return res.status(500).json({ message: "Error updating category", error });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({ message: "Could not find the category" });
    }
    await Category.findByIdAndDelete(id);

    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Could not delete category", error });
  }
};
