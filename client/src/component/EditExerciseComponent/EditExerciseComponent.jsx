import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";
import { Box } from "@mui/material/";
import { ListItem } from "./ListItem";

const EditExerciseComponent = ({ list, updList, deleteExercise }) => {
  const style = {
    "& > :not(style)": { m: 1, width: "25ch" },
    display: "flex",
    flexDirection: "column",
  };

  const changeExercise = (exercise) => {
    const newArray = [...list];
    const result = newArray.findIndex((elem) => elem._id === exercise.id);
    console.log(newArray[result]);
    newArray[result].name = exercise.name;
    newArray[result].type = exercise.type;
    updList(newArray);
  };

  useEffect(() => {
    updList(list);
  }, [list, updList]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = list[dragIndex];
      updList(
        update(list, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard],
          ],
        })
      );
    },
    [list, updList]
  );

  return (
    <Box style={style}>
      {list.map((card, index) => (
        <ListItem
          key={card._id}
          index={index}
          id={card.id}
          item={card}
          moveCard={moveCard}
          changeExercise={changeExercise}
          list={list}
          deleteExercise={deleteExercise}
        />
      ))}
    </Box>
  );
};

EditExerciseComponent.defaultProps = {
  deleteExercise: () => {},
  updList: () => {},
  list: [],
};

EditExerciseComponent.propTypes = {
  deleteExercise: PropTypes.func,
  updList: PropTypes.func,
  list: PropTypes.array,
};

export default EditExerciseComponent;
