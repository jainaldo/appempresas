import Sequelize, { Model } from 'sequelize';

class EnterpriseType extends Model {
  static init(sequelize) {
    super.init(
      {
        enterprise_type_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default EnterpriseType;
