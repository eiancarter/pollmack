exports.seed = function(knex, Promise) {
  return knex('candidates').insert([
    {
      name: 'Dan Crenshaw',
      description:
        'Current Republican House Representative and former Navy Seal',
    },
  ]);
};
