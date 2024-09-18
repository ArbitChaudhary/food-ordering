import { Request, Response } from "express";
import User from "../models/user.models";

export const getAuthorizedUser = async (req: Request, res: Response) => {
  const userId = (req as any).id;
  try {
    if (!userId) {
      return res.status(404).json({ message: "Forbidden" });
    }
    const user = await User.findById(userId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json("Something went wrong");
  }
};
