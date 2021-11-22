const exerciseValidation = (exerciseList) => {
  const res = exerciseList.filter(
    (item) => Number(item.repeats) === 0 || Number(item.measurement) === 0
  );
  if (res.length) {
    return true;
  } else {
    return false;
  }
};

export default exerciseValidation;
