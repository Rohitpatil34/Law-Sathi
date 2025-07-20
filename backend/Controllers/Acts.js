
import Acts from "../Model/Acts.js";
import Sections from "../Model/Sections.js";

const handlegetActs = async (req, res) => {
    try {
        const acts = await Acts.find()

        return res.status(200).json(acts);
    } catch (error) {
        console.error("Error fetching acts:", error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};
 // Adjust the path as needed

const handlegetaddSectiondata = async (req, res) => {
  try {
    const data = req.body;
    console.log("📥 Received section data:", data);

    // Validate input
    if (!Array.isArray(data) || data.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid or empty section data",
      });
    }

    // Save to DB
    const insertedSections = await Sections.insertMany(data);

    return res.status(200).json({
      success: true,
      message: "✅ Sections saved to DB successfully",
      data: insertedSections,
    });
  } catch (error) {
    console.error("❌ Error handling section data:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while saving section data",
    });
  }
};

export {
    handlegetActs,
    handlegetaddSectiondata
}