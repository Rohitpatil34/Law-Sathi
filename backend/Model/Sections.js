import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema({
    actId: { type: mongoose.Schema.Types.ObjectId, ref: 'Act' },
    number: String,
    title: String,
    content: String
});

export default mongoose.model("Sections", SectionSchema);
