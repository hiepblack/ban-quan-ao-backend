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

router.get("/", getAllcate);
router.post("/", addCate);
router.get("/:id", getAllproduct);
router.put("/:id", cateUpdate);
router.delete("/:id", cateRemove);

export default router;
