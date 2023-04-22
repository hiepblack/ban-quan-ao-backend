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

router.get("/", getAll);
router.post("/add", create);

router.delete("/delete", checkAuth, blogRemove);
router.put("/update/:id", checkAuth, update);
router.get("/:id", getOne);

export default router;
