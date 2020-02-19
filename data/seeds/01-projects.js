exports.seed = function(knex, Promise) {
  return knex('candidates').insert([
    {
      name: 'Dan Crenshaw',
      party:
        'Republican',
      office:
        'House of Representatives',
    },
    {
      name: 'Tulsi Gabbard',
      party:
        'Democrat',
      office:
        'House of Representatives',
    },
    {
      name: 'Andrew Yang',
      party:
        'Democrat',
      office:
        'None',
    },
    {
      name: 'Donald Trump',
      party:
        'Republican',
      office:
        'President',
    },
  ]);
};
