import { Router } from "express";
import { signUp } from "../controllers/auth.controller.js";
import { signUpValidator } from "../validators/auth.validator.js"

const router = Router();

router.post('/sign-up', signUpValidator, signUp);

export default router;