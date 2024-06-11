import express from "express";
const router = express.Router();
import Signupuser from "../Controllers/Signupuser";
import Loginuser from "../Controllers/Loginuser";

router.post("/signup", Signupuser);
router.post("/login", Loginuser);





export default router;