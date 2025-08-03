// Controllers/actController.js
import Acts from "../Model/Acts.js";

// 1. Get all distinct main categories
export const getAllMainCategories = async (req, res) => {
  try {
    const categories = await Acts.distinct("mainCategory");
    res.status(200).json(categories.sort());
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch main categories." });
  }
};

// 2. Get all subcategories for a main category
export const getSubcategoriesByMainCategory = async (req, res) => {
  try {
    const { mainCategory } = req.params;
    const decodedMainCategory = decodeURIComponent(mainCategory);

    const subcategories = await Acts.distinct("category", {
      mainCategory: decodedMainCategory,
    });

    res.status(200).json(subcategories.sort());
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch subcategories." });
  }
};

// 3. Get all acts for a given category
export const getActsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const decodedCategory = decodeURIComponent(category);

    const acts = await Acts.find(
      { category: decodedCategory },
      { name: 1, _id: 1 }
    ).sort({ name: 1 });

    res.status(200).json(acts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch acts." });
  }
};


