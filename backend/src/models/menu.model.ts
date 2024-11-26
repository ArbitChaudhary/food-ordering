import mongoose from "mongoose";

export interface menuItem {
  _id: string;
  name: string;
  menuImage: string;
  price: number;
  offer: number;
  description: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const menuSchema = new mongoose.Schema<menuItem>(
  {
    name: {
      type: String,
      // required: true,
    },
    category: {
      type: String,
      // required: true,
    },
    menuImage: [
      {
        type: String,
      },
    ],
    price: {
      type: Number,
      // required: true,
      min: 1,
    },
    offer: {
      type: Number,
      min: 1,
      max: 100,
    },
    description: {
      type: String,
      // required: true,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

const Menu = mongoose.model<menuItem>("Menu", menuSchema);

export default Menu;
