import express from "express";
<<<<<<< HEAD
import { signup,signin } from "../Controller/authController.js";



const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);



=======
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
>>>>>>> 82d41da323c95692f2902147c40db812bfda5ce9
export default router;
