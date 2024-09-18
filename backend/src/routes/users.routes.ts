import express from "express";
import verifyToken from "../utils/verify_token";
import { getAuthorizedUser } from "../contollers/users.controller";

const router = express.Router();

router.get("/get", verifyToken, getAuthorizedUser);

export default router;
