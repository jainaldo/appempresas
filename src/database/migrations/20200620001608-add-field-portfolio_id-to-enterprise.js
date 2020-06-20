module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('enterprises', 'portfolio_id', {
      type: Sequelize.INTEGER,
      references: { model: 'portfolios', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('enterprises', 'portfolio_id');
  },
};
