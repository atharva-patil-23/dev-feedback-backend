import { Router } from "express";
import { healtcheck } from "../controller/healthCheck.controller.js";

const router = Router()

router.route("/").get(healtcheck)

export default router