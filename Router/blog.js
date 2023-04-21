import express from "express";
import checkAuth from "../midlewares/checkAuth.js";
import {
  blogRemove,
  create,
  getAll,
  getOne,
  update,
} from "../Controller/blogcontroller.js";
const router = express.Router();
router.post("/", getAll);
router.post("/add", create);

router.delete("/delete", checkAuth, blogRemove);
router.put("/update/:id", checkAuth, update);
router.post("/:id", checkAuth, getOne);

export default router;
