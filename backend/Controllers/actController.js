// Controllers/actController.js
import Acts from "../Model/Acts.js";
import Sections from "../Model/Sections.js";

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

// 4. Get all sections for a given Act by actId
export const getSectionsByActId = async (req, res) => {
  try {
    const { actId } = req.body;  // ✅ take actId from body
    
    if (!actId) {
      return res.status(400).json({ error: "actId is required in the request body." });
    }

    const sections = await Sections.find({ actId })

    if (!sections || sections.length === 0) {
      return res.status(404).json({ error: "No sections found for this actId." });
    }

    res.status(200).json({ sections });
  } catch (error) {
    console.error("Error fetching sections:", error.message);
    res.status(500).json({ error: "Failed to fetch sections for the given act." });
  }
};

