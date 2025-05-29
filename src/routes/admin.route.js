import { registerAdmin } from "../controller/admin.controller.js";
import { Router } from "express";

const router = Router()

router.route("/register").post(registerAdmin)

export default router