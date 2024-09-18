import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

interface UserPayload {
  id: string;
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const access_token = req.headers.authorization;
  const token = access_token?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  verify(token, process.env.JWT_SECRET_KEY as string, (error, user) => {
    if (error) {
      return res.status(403).json({ message: "Forbidden" });
    }
    (req as any).id = (user as UserPayload).id;
    next();
  });
};

export default verifyToken;
