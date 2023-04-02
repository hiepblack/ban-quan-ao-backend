import express from "express";
import checkAuth from "../midlewares/checkAuth.js";
import { createDetail, getAll, getOne, update } from "../Controller/oderdetail.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.put("/:id", checkAuth, update);
router.post("/", createDetail);

export default router;
