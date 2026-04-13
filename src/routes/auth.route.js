import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";
import { signUpValidator } from "../validators/auth.validator.js"
import asyncHandler from "../middlewares/asyncHandler.js";

const router = Router();

router.post('/sign-up', signUpValidator, asyncHandler(signUp));

export default router;