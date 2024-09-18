import mongoose, { Schema } from "mongoose";
import { menuItem } from "./menu.model";

export interface IVendor {
  _id: string;
  name: string;
  email: string;
  phone: number;
  address: string;
  profilePhoto: string;
  coverPhoto: string;
  description: string;
  foodCategory: string;
  openingTime: Date;
  closingTime: Date;
  menu: menuItem["_id"];
  createdAt: Date;
  updatedAt: Date;
}

const phoneNumberRegx = /^\d{10}$/;

const vendorSchema = new Schema<IVendor>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
    },
    coverPhoto: {
      type: String,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    foodCategory: [
      {
        type: String,
      },
    ],
    openingTime: {
      type: Date,
      required: true,
    },
    closingTime: {
      type: Date,
      required: true,
    },
    menu: [
      {
        type: Schema.Types.ObjectId,
        ref: "Menu",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Vendor = mongoose.model<IVendor>("Vendor", vendorSchema);

export default Vendor;
