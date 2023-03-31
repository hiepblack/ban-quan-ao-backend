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
router.post("/", checkAuth, addCate);
router.get("/:id", checkAuth, getAllproduct);
router.put("/:id", checkAuth, cateUpdate);
router.delete("/:id", checkAuth, cateRemove);


export default router;
