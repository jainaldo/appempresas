import Sequelize, { Model } from 'sequelize';

class Enterprise extends Model {
  static init(sequelize) {
    super.init(
      {
        enterprise_name: Sequelize.STRING,
        description: Sequelize.TEXT,
        email_enterprise: Sequelize.STRING,
        facebook: Sequelize.STRING,
        twitter: Sequelize.STRING,
        linkedin: Sequelize.STRING,
        phone: Sequelize.STRING,
        own_enterprise: Sequelize.BOOLEAN,
        photo: Sequelize.STRING,
        value: Sequelize.INTEGER,
        shares: Sequelize.INTEGER,
        share_price: Sequelize.DECIMAL,
        own_shares: Sequelize.INTEGER,
        city: Sequelize.STRING,
        country: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.EnterpriseType, {
      foreignKey: 'type_id',
      as: 'enterprise_type',
    });
    this.belongsTo(models.Portfolio, {
      foreignKey: 'portfolio_id',
    });
  }
}

export default Enterprise;
