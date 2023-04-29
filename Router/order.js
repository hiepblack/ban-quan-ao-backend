import express from "express";
import checkAuth from "../midlewares/checkAuth.js";
import {
  create,
  getAll,
  getMonth,
  getOne,
  update,
} from "../Controller/orderController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/month", getMonth);
router.get("/:id", getOne);
router.put("/update/:id", checkAuth, update);
router.post("/", create);

export default router;
