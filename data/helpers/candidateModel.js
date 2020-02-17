const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
  getProjectActions,
};

function get(id) {
  let query = db("candidates as c");

  if (id) {
    query.where("c.id", id).first();

    const promises = [query, getProjectActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [candidate, contributions] = results;

      if (candidate) {
        candidate.contributions = contributions;

        return mappers.projectToBody(candidate);
      } else {
        return null;
      }
    });
  } else {
    return query.then(candidates => {
      return candidates.map(candidate => mappers.projectToBody(candidate));
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

function getProjectActions(candidateId) {
  return db("candidates")
    .where("candidate_id", candidateId)
    .then(contributions => contributions.map(contribution => mappers.actionToBody(contribution)));
}
