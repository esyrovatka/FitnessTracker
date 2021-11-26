import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import {
  Box,
  FormControl,
  Button,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material/";

export const ListItem = ({
  id,
  item,
  index,
  moveCard,
  changeExercise,
  deleteExercise,
  exercise,

  setValidWorkout,
  allExer,
  workoutValidation,
}) => {
  const textFieldStyle = {
    width: 150,
    padding: "0px 10px",
  };

  const [currExer, setCurrExer] = useState(exercise);

  useEffect(() => {
    setCurrExer(exercise);
  }, [exercise]);

  const handleChange = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    workoutValidation(val) ? setValidWorkout(true) : setValidWorkout(false);
    setCurrExer({ ...currExer, [name]: val });
  };

  const exerciseChange = (event) => {
    const changeExerciseId = allExer.find(
      (item) => item.name === event.target.value
    );
    setCurrExer({ ...currExer, exerciseId: changeExerciseId._id });
  };

  useEffect(() => {
    changeExercise(currExer); // eslint-disable-next-line
  }, [currExer]);

  const currExercise = allExer.find((item) => item._id === currExer.exerciseId);
  //start dnd script//
  const style = {
    border: "1px solid gray",
    padding: "0.5rem 1rem",
    marginBottom: ".5rem",
    backgroundColor: "#f4f4f4",
    cursor: "move",
  };
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  //end dnd script//
  return (
    <Box ref={ref} sx={{ ...style, opacity }} data-handler-id={handlerId}>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          m: 1,
        }}>
        <Select
          sx={textFieldStyle}
          value={currExercise.name}
          name="exerciseId"
          onChange={exerciseChange}>
          {allExer.map((item) => (
            <MenuItem key={item._id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>

        <TextField
          sx={textFieldStyle}
          required
          name="repeats"
          value={currExer.repeats}
          label="repeats"
          onChange={handleChange}
        />

        <TextField
          sx={textFieldStyle}
          required
          name="measurement"
          value={currExer.measurement}
          label="measurement"
          onChange={handleChange}
        />

        {/* <ButtonList index={index} list={workout.exerciseList} sort={sort} /> */}

        <Button
          variant="contained"
          onClick={() => deleteExercise(currExer)}
          sx={{ width: 100 }}>
          Delete
        </Button>

        <Typography sx={textFieldStyle}>{currExercise.type}</Typography>
      </FormControl>
    </Box>
  );
};
