import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/connection.js";
import categoryRoute from "./Routes/actRoutes.js"
import ActRoute from "./Routes/Acts.js"
import { generateMcqForLaw } from "./Controllers/onlineTest.js";
import { chatWithBot } from "./Controllers/chatbotcontroller.js";
dotenv.config();

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;
const app = express();
connectDB(URI);

//Middlerwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Check Route
app.get("/health", (req, res) => {
  res.send("OK");
});
// app.use("/acts", ActRoute);
app.use("/act", categoryRoute);
app.post("/test", generateMcqForLaw);
app.post("/chatbot", chatWithBot);




// checkAndSendEmails()
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});