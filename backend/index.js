import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Config/connection.js";
import ActRoute from "./Routes/Acts.js"
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
app.use("/acts", ActRoute);

// checkAndSendEmails()
app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
});