import express from "express";
import checkAuth from "../midlewares/checkAuth.js";
import {
  cateblogRemove,
  create,
  getAll,
  getOne,
  update,
} from "../Controller/cateblogcontroller.js";

const router = express.Router();

router.get("/", getAll);
router.post("/add", create);

router.delete("/delete", checkAuth, cateblogRemove);
router.put("/update/:id", checkAuth, update);
router.post("/:id", checkAuth, getOne);

export default router;
