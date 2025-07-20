import mongoose from "mongoose";

const ActSchema = new mongoose.Schema({
  name: String,
  category: String
});

export default mongoose.model("Act", ActSchema);
