const mongoose = require('mongoose');
const fs = require('fs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/indian_laws', {
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Section Schema
const sectionSchema = new mongoose.Schema({
  actId: { type: mongoose.Schema.Types.ObjectId, ref: 'Act' },
  number: String,
  title: String,
  content: String
});

const Section = mongoose.model('Section', sectionSchema);

// Read JSON File
const rawData = fs.readFileSync('section.json');
const sectionsArray = JSON.parse(rawData);

// Insert Sections to DB
async function insertSections() {
  try {
    const actId = "6872841fa9962533c623f8ee"; // Replace with your actual Act ID

    // Attach actId to each section
    const sections = sectionsArray.map(sec => ({
      actId,
      number: sec.section,
      title: sec.title,
      content: sec.content
    }));

    const inserted = await Section.insertMany(sections);
    console.log(`✅ Inserted ${inserted.length} sections for actId: ${actId}`);
  } catch (error) {
    console.error('❌ Error inserting sections:', error);
  } finally {
    mongoose.connection.close();
  }
}

insertSections();
