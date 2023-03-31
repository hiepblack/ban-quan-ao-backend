import express from "express";
import { sigin, sigup } from "../Controller/authController.js";
import {
  addUser,
  userRemove,
  userUpdate,
} from "../Controller/userController.js";
import checkAuth from "../midlewares/checkAuth.js";
const router = express.Router();
router.post("/sigup", sigup);
router.get("/sigin", sigin);
router.delete("/delete", checkAuth, userRemove);
router.put("/update/:id", checkAuth, userUpdate);
router.post("/add", checkAuth, addUser);
export default router;
