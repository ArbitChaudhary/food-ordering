import express from "express";
import { upload } from "../config/multer";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
} from "../contollers/food.controller.ts";

const router = express.Router();

router.post("/create", upload.single("image"), createFood);
router.get("/get", getAllFood);
router.delete("/:id", deleteFood);
router.get("/:id", getFood);

export default router;
