import express from "express";
import {
  addCate,
  getAllcate,
  getAllproduct,
} from "../Controller/cateProduct.js";

const router = express.Router();
router.get("/categoryProduct", getAllcate);
router.post("/addcategory", addCate);
router.get("/:id", getAllproduct);
export default router;
