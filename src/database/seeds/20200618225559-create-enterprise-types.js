const data = require('../../../data.json');

module.exports = {
  up: (QueryInterface) => {
    const typeName = data.enterprises.map((entrepise) => {
      return entrepise.enterprise_type;
    });

    const orderTypes = typeName.sort((elem, pos) => {
      return elem.id - pos.id;
    });

    const listTypes = orderTypes.map((item) => {
      return item.enterprise_type_name;
    });

    const uniqueTypes = listTypes.filter((elem, pos) => {
      return listTypes.indexOf(elem) === pos;
    });

    const enterprise_types = uniqueTypes.map((type) => {
      return {
        enterprise_type_name: type,
        created_at: new Date(),
        updated_at: new Date(),
      };
    });

    return QueryInterface.bulkInsert('enterprise_types', enterprise_types, {});
  },

  down: () => {},
};
