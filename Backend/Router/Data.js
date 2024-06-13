import express from "express";
import Country from "../Controllers/Country.js";
const router = express.Router();

router.get('/All', Country);

export default router;