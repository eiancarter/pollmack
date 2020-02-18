exports.seed = function(knex) {
  return knex('contributions').insert([
    {
      candidate_id: 1,
      amount: 150,
      notes:
        'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
    },
    {
      candidate_id: 1,
      amount: 200,
      notes: 'Remember to cd into the folder where the Project was cloned',
    },
    {
      candidate_id: 1,
      amount: 500,
      notes: 'This is where the magic happens!',
    },
  ]);
};
