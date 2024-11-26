import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// Configuration

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath: any) => {
  try {
    if (!localFilePath) {
      return null;
    }
    // upload the file in cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    // file has been uploaded successfull

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally save temporary file as upload failed
    return null;
  }
};

export default uploadOnCloudinary;
