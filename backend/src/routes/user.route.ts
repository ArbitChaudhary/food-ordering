import express from "express";
import { createUser, loginUser } from "../contollers/user.controller";
import verifyToken from "../utils/verify_token";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);

export default router;
