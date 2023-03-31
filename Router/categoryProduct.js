import express from "express";
import {
  addCate,
  cateRemove,
  cateUpdate,
  getAllcate,
  getAllproduct,
} from "../Controller/cateProduct.js";
import checkAuth from "../midlewares/checkAuth.js";

const router = express.Router();
router.get("/categoryProduct", getAllcate);
router.post("/addcategory", checkAuth, addCate);
router.get("/:id", checkAuth, getAllproduct);
router.put("/:id", checkAuth, cateUpdate);
router.delete("/:id", checkAuth, cateRemove);
export default router;
