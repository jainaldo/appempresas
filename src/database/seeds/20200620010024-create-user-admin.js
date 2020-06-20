const bcrypt = require('bcryptjs');

module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          investor_name: 'Teste Apple',
          email: 'testeapple@ioasys.com.br',
          city: 'BH',
          country: 'Brasil',
          balance: 350000.0,
          photo: '/uploads/investor/photo/1/cropped4991818370070749122.jpg',
          portfolio_value: 350000.0,
          first_access: false,
          super_angel: false,
          portfolio_id: 1,
          password_hash: bcrypt.hashSync('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
