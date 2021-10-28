import React from "react";
import { Button } from "@mui/material/";
const ButtonList = ({ index, list, sort }) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => sort(index, "Up")}
        disabled={index === 0 ? true : false}>
        Up
      </Button>

      <Button
        variant="contained"
        onClick={() => sort(index, "Down")}
        disabled={index === list.length - 1 ? true : false}>
        Down
      </Button>
    </>
  );
};

export default ButtonList;
