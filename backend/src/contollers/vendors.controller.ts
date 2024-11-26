import { Request, Response } from "express";
import Menu from "../models/menu.model";
import uploadOnCloudinary from "../config/cloudinary";

interface RequestFiles {
  menuImage?: Express.Multer.File[]; // Use Express types for better compatibility
}
export const creatMenu = async (req: Request, res: Response) => {
  try {
    const menuImageLocalPath = (req.files as RequestFiles)?.menuImage;
    if (!menuImageLocalPath) {
      return res.status(400).json({ message: "Menu Images are required" });
    }

    const menuImageUrls = [];

    // const menuImage = await uploadOnCloudinary(menuImageLocalPath);
    // if (!menuImage) {
    //   return res.status(400).json({ message: "Menu Images are required" });
    // }
    for (const image of menuImageLocalPath) {
      const menuImage = await uploadOnCloudinary(image.path);
      if (menuImage && menuImage.secure_url) {
        menuImageUrls.push(menuImage.secure_url);
      } else {
        return res
          .status(400)
          .json({ message: "Error uploading image to Cloudinary" });
      }
    }
    const menuData = {
      ...req.body,
      // menuImage: menuImage.secure_url,
      menuImage: menuImageUrls,
    };
    const data = await Menu.create(menuData);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "Could not create menu" });
  }
};
