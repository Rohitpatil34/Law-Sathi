import express from "express";
import { handlegetActs, handlegetaddSectiondata } from "../Controllers/Acts.js";
const router = express.Router();
router.get("/",handlegetActs  );
router.post("/section",handlegetaddSectiondata  );


export default router;