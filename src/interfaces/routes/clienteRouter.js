import { Router } from "express";
import { CreateCliente, GetClientes, GetClienteById, UpdateCliente, DeleteCliente } from "../controllers/ClienteControllers.js";

const router = Router();

router.post("/", CreateCliente);
router.get("/", GetClientes);
router.get("/:id", GetClienteById);
router.put("/:id", UpdateCliente);
router.delete("/:id", DeleteCliente);

export default router;