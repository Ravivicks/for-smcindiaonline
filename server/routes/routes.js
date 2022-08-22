import express from "express";
import {addUser, userLogIn} from "../controller/userController.js";

import { addTest } from "../controller/testController.js";

const router = express.Router();

router.post("/adduser", addUser);
router.post('/login', userLogIn);
router.post("/addtest", addTest);

export default router;
