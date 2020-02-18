exports.seed = function(knex, Promise) {
  return knex('candidates').insert([
    {
      name: 'Dan Crenshaw',
      party:
        'Republican',
      office:
        'House of Representatives',
    },
  ]);
};
