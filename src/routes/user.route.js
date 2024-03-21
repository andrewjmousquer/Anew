import { Router } from "express";
import userController from "../controllers/userController.js"
const router = Router();

router.post("/", userController.created)
router.get("/", userController.findAll)

//post = envia as informacoes
//get = recolher informacoes
//put-patch = altera informacoes

export default router;