import express from "express";
import { signin, signup } from "../Controller/authController.js";
import {
  addUser,
  getAllUser,
  userRemove,
  userUpdate,
} from "../Controller/userController.js";
import checkAuth from "../midlewares/checkAuth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/",getAllUser)
router.delete("/delete", checkAuth, userRemove);
router.put("/update/:id", checkAuth, userUpdate);
router.post("/add", checkAuth, addUser);

export default router;
