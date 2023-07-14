module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "gerenciamento-teste",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};

// rodar o projeto => yarn dev
// starta o banco yarn sequelize db:migrate
// criar uma nova tabela => yarn sequelize migration:create --name=create-customers
// yarn add mysql2
// yarn sequelize db:migrate:undo:all <= desfaz minha tabelas já criadas
// model => classes com manipulçao das tabelas criadas no banco
// para exclusao de um campo no banco <= yarn sequelize migration:create --name remove provider-users
