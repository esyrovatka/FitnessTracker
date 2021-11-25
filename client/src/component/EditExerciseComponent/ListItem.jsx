import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import ExerciseList from "./ExerciseList";
import { Box, Container, Button } from "@mui/material/";

export const ListItem = ({
  id,
  item,
  index,
  moveCard,
  changeExercise,
  deleteExercise,
}) => {
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
    <Container ref={ref} sx={{ ...style, opacity }} data-handler-id={handlerId}>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" }, display: "flex" }}
        autoComplete="off">
        <ExerciseList item={item} changeExercise={changeExercise} />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => deleteExercise(item._id)}>
          Delete
        </Button>
      </Box>
    </Container>
  );
};
