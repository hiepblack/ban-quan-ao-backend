import express from "express";
import { sigup } from "../Controller/authController.js";
const router = express.Router();
router.post("/sigup", sigup);
export default router;
