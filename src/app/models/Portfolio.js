import Sequelize, { Model } from 'sequelize';

class Portfolio extends Model {
  static init(sequelize) {
    super.init(
      {
        enterprises_number: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Enterprise, {
      foreignKey: 'portfolio_id',
      as: 'enterprises',
    });
  }
}

export default Portfolio;
