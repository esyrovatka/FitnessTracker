const sortExercise = (index, type, list) => {
  const newArr = [...list];
  type === "Up" &&
    ([newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]]);

  type === "Down" &&
    ([newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]]);
  return newArr;
};

export default sortExercise;
