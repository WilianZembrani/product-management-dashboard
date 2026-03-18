const express = require("express");
const cors = require("cors");

const productRoutes = require("../src/routes/productRoutes");
const clienteRoutes = require("../src/routes/clienteRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/clientes", clienteRoutes);
app.use("/produtos", productRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
