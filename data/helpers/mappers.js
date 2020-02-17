module.exports = {
  intToBoolean,
  booleanToint,
  candidateToBody,
  contributionToBody,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function candidateToBody(candidate) {
  const result = {
    ...candidate,
    completed: intToBoolean(candidate.completed),
  };

  if (candidate.contributions) {
    result.contributions = candidate.contributions.map(contribution => ({
      ...contribution,
      completed: intToBoolean(contribution.completed),
    }));
  }

  return result;
}

function contributionToBody(contribution) {
  return {
    ...contribution,
    completed: intToBoolean(contribution.completed),
  };
}
