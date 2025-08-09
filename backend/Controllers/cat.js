import fs from "fs";
import path from "path";
import Acts from "../Model/Acts.js";

 const updateMainCategories = async (req, res) => {
  try {
    // Load categories.json
    const filePath = path.join(process.cwd(), "categories.json");
    const rawData = fs.readFileSync(filePath, "utf8");
    const categoryMap = JSON.parse(rawData);

    // Reverse mapping: subcategory → mainCategory
    const subToMain = {};
    for (const [main, subs] of Object.entries(categoryMap)) {
      subs.forEach(sub => {
        subToMain[sub] = main;
      });
    }

    let totalUpdated = 0;

    for (const [subcategory, mainCategory] of Object.entries(subToMain)) {
      const result = await Acts.updateMany(
        { category: subcategory },
        { $set: { mainCategory: mainCategory } }
      );
      totalUpdated += result.modifiedCount;
      if (result.modifiedCount > 0) {
        console.log(`Updated ${result.modifiedCount} document(s) for "${subcategory}" → "${mainCategory}"`);
      }
    }

    res.status(200).json({ message: `Main categories updated successfully`, totalUpdated });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ error: "Failed to update main categories" });
  }
};

export {
    updateMainCategories
}