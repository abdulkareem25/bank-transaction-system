import { Router } from "express";
import { getUser, signUp } from "../controllers/auth.controller.js";
import { signUpValidator } from "../validators/auth.validator.js"
import asyncHandler from "../middlewares/asyncHandler.js";
import authHandler from "../middlewares/authHandler.js";

const router = Router();

router.post('/sign-up', signUpValidator, asyncHandler(signUp));

router.get('/get-user', authHandler, asyncHandler(getUser));

export default router;