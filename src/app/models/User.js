import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        investor_name: Sequelize.STRING,
        email: Sequelize.STRING,
        city: Sequelize.STRING,
        country: Sequelize.STRING,
        balance: Sequelize.DECIMAL,
        photo: Sequelize.STRING,
        portfolio_value: Sequelize.DECIMAL,
        first_access: Sequelize.BOOLEAN,
        super_angel: Sequelize.BOOLEAN,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Portfolio, {
      foreignKey: 'portfolio_id',
      as: 'portfolio',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
