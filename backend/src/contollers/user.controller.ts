import { Response, Request } from "express";
import User, { userTypes } from "../models/user.models";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const newUser = new User<userTypes>(req.body);
    await newUser.save();
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Error creating user" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const existingEmail = await User.findOne({ email });

  if (!existingEmail) {
    return res.status(404).json({ message: "Email does not exists" });
  }

  const matchPassword = bcryptjs.compareSync(password, existingEmail.password);
  if (!matchPassword) {
    return res.status(403).json({ message: "Invalid credentials" });
  }
  const { password: pass, ...user } = existingEmail.toObject();
  const access_token = jwt.sign(
    { id: existingEmail._id },
    process.env.JWT_SECRET_KEY as string,
    {
      expiresIn: "1hr",
    }
  );
  return res
    .status(200)
    .json({ message: "User logged in", access_token, user });
};
