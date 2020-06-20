module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert('portfolios', [
      {
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: () => {},
};
