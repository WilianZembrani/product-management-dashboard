const productsService = require("../services/produtsService");

exports.listarProdutos = (req, res) => {
  productsService.listar((err, results) => {
    if (err) {
      return res.status(500).send("Erro no servidor");
    }
    res.json(results);
  });
};

exports.criarProduto = (req, res) => {
  const dados = req.body;
  productsService.criar(dados, (err, results) => {
    if (err) {
      console.log("Erro ao criar", err);
      return res.status(500).send("Erro ao criar o produto");
    }
    res.json(results);
  });
};

exports.atualizarProduto = (req, res) => {
  const id = req.params.id;
  const dados = req.body;

  productsService.atualizar(id, dados, (err, results) => {
    if (err) {
      return res.status(500).send("Erro ao atualizar produto");
    }
    res.json(results);
  });
};

exports.deletarProduto = (req, res) => {
  const id = req.params.id;

  productsService.delete(id, (err, results) => {
    if (err) {
      console.log("ERRO REAL:", err);
      return res.status(500).send(err);
    }

    res.json(results);
  });
};
