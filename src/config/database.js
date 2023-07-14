module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "250320",
  database: "teste",
  define: {
    timestamp: true, // cria duas colunas: createdAt e updatedAt
    underscored: true,
    underscoredAll: true,
  },
};
