exports.seed = function(knex, Promise) {
  return knex('candidates').insert([
    {
      name: 'Dan Crenshaw',
      party:
        'Current Republican House Representative and former Navy Seal',
      office:
        'Current Republican House Representative and former Navy Seal',
    },
  ]);
};
