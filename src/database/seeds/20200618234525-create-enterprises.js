const data = require('../../../data.json');

module.exports = {
  up: async (QueryInterface) => {
    const [, entreprise_types] = await QueryInterface.sequelize.query(
      `SELECT * FROM enterprise_types;`
    );

    const enterprises = data.enterprises.map((entrepise) => {
      const type = entreprise_types.rows.find((entType) => {
        return (
          entType.enterprise_type_name ===
          entrepise.enterprise_type.enterprise_type_name
        );
      });

      delete entrepise.enterprise_type;

      return {
        ...entrepise,
        type_id: type.id,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });

    return QueryInterface.bulkInsert('enterprises', enterprises, {});
  },

  down: () => {},
};
