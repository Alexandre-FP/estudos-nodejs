module.exports = {
  up: queryInterface => {
    return queryInterface.removeColumn("users", "provider");
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("users", "provider", {
      type: Sequelize.BOOLEAN,
      default: false,
      allowNull: false,
    });
  },
};

// remover uma coluna do meu banco mais o inverso agora do up e down <= yarn sequelize db:migrate
// adiciona novamente a clouna undo desfaz a ultim alteração feita <= yarn sequelize db:migrate:undo

// undoall vai desfazer todas

//  yarn sequelize migration:create --name add-status-customers <= adicionando uma coluna nova no banco
