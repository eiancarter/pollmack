const db = require("../dbConfig");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
  getCandidateActions,
};

function get(id) {
  let query = db("candidates as c");

  if (id) {
    query.where("c.id", id).first();

    const promises = [query, getCandidateActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [candidate, contributions] = results;

      if (candidate) {
        candidate.contributions = contributions;

        return mappers.candidateToBody(candidate);
      } else {
        return null;
      }
    });
  } else {
    return query.then(candidates => {
      return candidates.map(candidate => mappers.candidateToBody(candidate));
    });
  }
}

function insert(candidate) {
  return db("candidates")
    .insert(candidate, "id")
    .then(([id]) => get(id));
}

function update(id, changes) {
  return db("candidates")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("candidates")
    .where("id", id)
    .del();
}

function getCandidateActions(candidateId) {
  return db("contributions")
    .where("candidate_id", candidateId)
    .then(contributions => contributions.map(contribution => mappers.candidateToBody(contribution)));
}
