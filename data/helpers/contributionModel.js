const db = require("../dbConfig");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
  let query = db("contributions");

  if (id) {
    return query
      .where("id", id)
      .first()
      .then(contribution => {
        if (contribution) {
          return mappers.contributionToBody(contribution);
        } else {
          return null;
        }
      });
  } else {
    return query.then(contributions => {
      return contributions.map(contribution => mappers.contributionToBody(contribution));
    });
  }
}

function insert(contribution) {
  return db("contributions")
    .insert(contribution)
    .then(([id]) => get(id));
}

function update(id, changes) {
  return db("contributions")
    .where("id", id)
    .update(changes)
    .then(count => (count > 0 ? get(id) : null));
}

function remove(id) {
  return db("contributions")
    .where("id", id)
    .del();
}
