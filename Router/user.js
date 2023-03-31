import express from "express";
import { sigin, sigup } from "../Controller/authController.js";
const router = express.Router();
router.post("/sigup", sigup);
router.get("/sigin", sigin);
export default router;
