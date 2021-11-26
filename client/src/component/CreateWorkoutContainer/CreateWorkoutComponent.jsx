import React from "react";
import { Box } from "@mui/material/";
import { ListItem } from "./ListItem";
import { workoutValidation } from "../../utils/workoutValidation";

const CreateWorkoutComponent = ({
  list,
  deleteExercise,
  allExer,
  changeExercise,
  setValidWorkout,
  moveCard,
}) => {
  const style = {
    "& > :not(style)": { m: 1, width: "25ch" },
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Box style={style}>
      {list.map((card, index) => (
        <ListItem
          key={card.id || card._id}
          index={index}
          id={card.id}
          moveCard={moveCard}
          list={list}
          deleteExercise={deleteExercise}
          allExer={allExer}
          exercise={card}
          changeExercise={changeExercise}
          workoutValidation={workoutValidation}
          setValidWorkout={setValidWorkout}
        />
      ))}
    </Box>
  );
};

export default CreateWorkoutComponent;
