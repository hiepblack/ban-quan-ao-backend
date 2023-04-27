import express from "express";
import {
  getAllproduct,
  getOnecate,
  getOneproduct,
  productAdd,
  productRemove,
  productupdate,
  fiterProduct,
  updateStatus,
} from "../Controller/product.js";
import checkAuth from "../midlewares/checkAuth.js";

const router = express.Router();

router.post("/", productAdd);
router.get("/", getAllproduct);
router.put("/:id", productupdate);
router.patch("/:id", updateStatus);
router.get("/:id", getOneproduct);
router.delete("/:id", productRemove);

router.post("/filter/", fiterProduct);

router.get("/productcate/:id", getOnecate);

export default router;
