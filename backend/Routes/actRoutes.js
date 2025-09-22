// Routes/actsRoutes.js
import express from "express";
import {
  getAllMainCategories,
  getSubcategoriesByMainCategory,
  getActsByCategory,
  getSectionsByActId,
} from "../Controllers/actController.js";

const router = express.Router();

// 1. Get all main categories
router.get("/main-categories", getAllMainCategories);

// 2. Get subcategories by main category
router.get("/main-category/:mainCategory", getSubcategoriesByMainCategory);

// 3. Get acts by category
router.get("/category/:category", getActsByCategory);

router.post("/section", getSectionsByActId);



export default router;
