import express from 'express';
import {getAllcmt,getOnecmt,addcmt,cmtRemove,cmtUpdate} from "../Controller/commentController.js"

const router = express.Router();

router.post("/:productId",addcmt);

export default router