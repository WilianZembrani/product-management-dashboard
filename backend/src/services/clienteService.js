const connection = require("../database/connection");

exports.listar = (callback) => {
  const sql = "SELECT * FROM clientes";
  connection.query(sql, callback);
};

exports.criar = (dados, callback) => {
  const sql = "INSERT INTO clientes SET ?";
  connection.query(sql, dados, callback);
};

exports.atualizar = (id, dados, callback) => {
  const sql = "UPDATE clientes SET ? WHERE id=?";
  connection.query(sql, [dados, id], callback);
};

exports.delete = (id, callback) => {
  const sql = "DELETE FROM clientes WHERE id=?";
  connection.query(sql, [id], callback);
};
