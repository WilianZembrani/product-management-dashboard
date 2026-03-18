const express = require("express");
const router = express.Router();

const clienteController = require("../controllers/clienteControllers");

router.get("/", clienteController.listarClientes);
router.post("/", clienteController.criarCliente);
router.put("/:id", clienteController.atualizarCliente);
router.delete("/:id", clienteController.deletarCliente);

module.exports = router;
