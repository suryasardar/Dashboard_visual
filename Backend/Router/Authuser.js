import express from "express";
const router = express.Router();
import Signupuser from "../Controllers/Signupuser.js";
import Loginuser from "../Controllers/Loginuser.js";

router.post("/signup", Signupuser);
router.post("/login", Loginuser);





export default router;