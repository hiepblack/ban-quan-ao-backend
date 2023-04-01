import express from "express";
import checkAuth from "../midlewares/checkAuth.js";
import {
  create,
  getAll,
  getOne,
  update,
} from "../Controller/orderController.js";
const router = express.Router();
router.get("/", getAll);
router.get("/:id", getOne);
router.put("/update/:id", checkAuth, update);
router.post("/add", create);
export default router;
