const clienteService = require("../services/clienteService");

exports.listarClientes = (req, res) => {
  clienteService.listar((err, results) => {
    if (err) {
      return res.status(500).send("Não foi possivel listar os clientes");
    }
    res.json(results);
  });
};

exports.criarCliente = (req, res) => {
  const dados = req.body;
  clienteService.criar(dados, (err, results) => {
    if (err) {
      return res.status(500).send("Não foi possivel criar o cliente");
    }
    res.json(results);
  });
};

exports.atualizarCliente = (req, res) => {
  const dados = req.body;
  const id = req.params.id;
  clienteService.atualizar(id, dados, (err, results) => {
    if (err) {
      return res.status(500).send("Não foi possivel atualizar o cliente  ");
    }
    res.json(results);
  });
};

exports.deletarCliente = (req, res) => {
  const id = req.params.id;
  clienteService.delete(id, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao deletar cliente");
    }
    res.json(results);
  });
};
