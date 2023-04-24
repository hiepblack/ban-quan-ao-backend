import express from "express";
import {
  getAllproduct,
  getOnecate,
  getOneproduct,
  productAdd,
  productRemove,
  productupdate,
  fiterProduct,
} from "../Controller/product.js";
import checkAuth from "../midlewares/checkAuth.js";

const router = express.Router();

router.post("/", checkAuth, productAdd);
router.get("/", getAllproduct);
router.put("/:id", checkAuth, productupdate);
router.get("/:id", getOneproduct);
router.delete("/:id", checkAuth, productRemove);

router.post("/filter/",fiterProduct);

router.get("/productcate/:id", checkAuth, getOnecate);


export default router;
