import express from "express";
import { upload } from "../config/multer";
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategory,
  updateCategory,
} from "../contollers/category.controller";

const router = express.Router();

router.post("/create-category", upload.single("categoryImg"), createCategory);
router.get("/get-categories", getCategories);
router.get("/get-category/:categoryId", getCategory);
router.patch("/:id", upload.single("categoryImg"), updateCategory);
router.delete("/:id", deleteCategory);

export default router;
