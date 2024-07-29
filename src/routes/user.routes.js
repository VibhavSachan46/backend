import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js"; // Aise {} import tab hi le sakte hai jab export default na ho

const router = Router()

router.route("/register").post(registerUser)

export default router