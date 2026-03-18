const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Julia,wilian2409",
  database: "loja",
});

connection.connect((err) => {
  if (err) {
    console.log("Erro ao conectar", err);
  } else {
    console.log("Banco conectado");
  }
});

module.exports = connection;
