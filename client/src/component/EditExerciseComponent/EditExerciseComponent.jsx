import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Container, Button } from "@mui/material/";
import ExerciseList from "./ExerciseList";
import ButtonList from "./ButtonList";
const EditExerciseComponent = ({ list, updList, deleteExercise, sort }) => {
  const style = {
    "& > :not(style)": { m: 1, width: "25ch" },
    display: "flex",
  };

  const changeExercise = (exercise) => {
    const newArray = [...list];
    const result = newArray.find((elem) => elem._id === exercise.id);
    result.name !== exercise.name &&
      (result.name = exercise.name) &&
      updList(newArray);
    result.type !== exercise.type &&
      (result.type = exercise.type) &&
      updList(newArray);
  };
  useEffect(() => {
    updList(list);
  }, [list, updList]);

  return list.map((item, index) => (
    <Container key={item._id}>
      <Box component="form" sx={style} noValidate autoComplete="off">
        <ExerciseList item={item} changeExercise={changeExercise} />

        <ButtonList index={index} list={list} sort={sort} />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => deleteExercise(item._id)}>
          Delete
        </Button>
      </Box>
    </Container>
  ));
};

EditExerciseComponent.defaultProps = {
  sort: () => {},
  deleteExercise: () => {},
  updList: () => {},
  list: [],
};

EditExerciseComponent.propTypes = {
  sort: PropTypes.func,
  deleteExercise: PropTypes.func,
  updList: PropTypes.func,
  list: PropTypes.array,
};

export default EditExerciseComponent;
