const exerciseValidation = (exerciseList) => {
  const res = exerciseList.filter(
    (item) => Number(item.repeats) < 1 || Number(item.measurement) < 1
  );
  if (res.length) {
    return true;
  } else {
    return false;
  }
};

export default exerciseValidation;
