exports.seed = function(knex) {
  return knex('contributions').insert([
    {
      candidate_id: 1,
      description: 'Fork and Clone Repository',
      notes:
        'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
    },
    {
      candidate_id: 1,
      description: 'Install Dependencies',
      notes: 'Remember to cd into the folder where the Project was cloned',
    },
    {
      candidate_id: 1,
      description: 'Design and Build API Endpoints',
      notes: 'This is where the magic happens!',
    },
  ]);
};
