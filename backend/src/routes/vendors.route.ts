import express from "express";
import { execArgv } from "process";
import { creatMenu } from "../contollers/vendors.controller";
import { upload } from "../config/multer";

const router = express.Router();

router.post(
  "/create-menu",
  upload.fields([{ name: "menuImage", maxCount: 5 }]),
  creatMenu
);

export default router;
