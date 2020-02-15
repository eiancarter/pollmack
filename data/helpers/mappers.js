module.exports = {
  intToBoolean,
  booleanToint,
  projectToBody,
  actionToBody,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function projectToBody(candidate) {
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

function actionToBody(contribution) {
  return {
    ...contribution,
    completed: intToBoolean(contribution.completed),
  };
}
