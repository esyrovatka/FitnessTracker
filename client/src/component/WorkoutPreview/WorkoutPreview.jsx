import React from "react";
import { Card, CardContent, Typography } from "@mui/material/";
import { useSelector } from "react-redux";
import { exerciseList } from "../../redux/selectors";

const WorkoutPreview = ({ exercise, index }) => {
  const exercises = useSelector(exerciseList);

  const currExercise = exercises.find(
    (item) => item._id === exercise.exerciseId
  );

  return currExercise ? (
    <Card sx={{ minWidth: 275, margin: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Exercise {index + 1}
        </Typography>
        <Typography variant="h5" component="div">
          Name: {currExercise.name}
        </Typography>
        <Typography variant="h5" component="div">
          Measurement: {exercise.measurement}
        </Typography>
        <Typography variant="h5" component="div">
          Repeats: {exercise.repeats}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Card sx={{ minWidth: 275, margin: 1 }}>
      <CardContent> </CardContent>
    </Card>
  );
};

export default WorkoutPreview;
