exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Dan Crenshaw',
      description:
        'Current Republican House Representative and former Navy Seal',
    },
  ]);
};
