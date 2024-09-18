import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

export interface userTypes {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  city: string;
  country: string;
  addressLine: string;
  role: "Admin" | "Vendor" | "Customer";
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<userTypes>(
  {
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    addressLine: {
      type: String,
    },
    role: {
      type: "String",
      required: true,
      default: "Customer",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified(this.password)) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model<userTypes>("User", userSchema);

export default User;
