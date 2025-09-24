// Routes/actsRoutes.js
import express from "express";
import {
  getAllMainCategories,
  getSubcategoriesByMainCategory,
  getActsByCategory,
  getSectionsByActId,
  searchActs, // 👈 import search controller
} from "../Controllers/actController.js";

const router = express.Router();

// 1. Get all main categories
router.get("/main-categories", getAllMainCategories);

// 2. Get subcategories by main category
router.get("/main-category/:mainCategory", getSubcategoriesByMainCategory);

// 3. Get acts by category
router.get("/category/:category", getActsByCategory);

// 4. Get sections by actId
router.post("/section", getSectionsByActId);

// 5. 🔎 Search acts by name or category
router.get("/search", searchActs);

export default router;
