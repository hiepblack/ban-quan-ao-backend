import express from "express";
import {
  getAllproduct,
  getOnecate,
  getOneproduct,
  productAdd,
  productRemove,
  productupdate,
} from "../Controller/product.js";
const router = express.Router();
router.post("/productadd", productAdd);
router.get("/products", getAllproduct);
router.post("/productupdate/:id", productupdate);
router.get("/product/:id", getOneproduct);
router.get("/productcate/:id", getOnecate);
router.delete("/product/:id", productRemove);
export default router;
