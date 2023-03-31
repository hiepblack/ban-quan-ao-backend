import express from "express";
import {
  getAllproduct,
  getOnecate,
  getOneproduct,
  productAdd,
  productRemove,
  productupdate,
} from "../Controller/product.js";
import checkAuth from "../midlewares/checkAuth.js";
const router = express.Router();
router.post("/productadd", checkAuth, productAdd);
router.get("/products", getAllproduct);
router.post("/productupdate/:id", checkAuth, productupdate);
router.get("/product/:id", checkAuth, getOneproduct);
router.get("/productcate/:id", checkAuth, getOnecate);
router.delete("/product/:id", checkAuth, productRemove);
export default router;
