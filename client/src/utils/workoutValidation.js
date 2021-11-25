export const workoutValidation = (val) => {
  const isNumber = Number.isInteger(Number(val));
  const isEmpty = val.length > 0;
  const IsPositive = Number(val) > 0;
  if (isNumber && isEmpty && IsPositive) {
    return true;
  } else {
    return false;
  }
};
