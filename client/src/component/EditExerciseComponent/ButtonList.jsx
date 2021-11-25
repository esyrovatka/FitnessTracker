import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material/";
const ButtonList = ({ index, list, sort }) => {
  return (
    <>
      <Button
        sx={{ width: 80, m: 1 }}
        variant="contained"
        onClick={() => sort(index, "Up")}
        disabled={index === 0 ? true : false}>
        Up
      </Button>

      <Button
        sx={{ width: 80, m: 1 }}
        variant="contained"
        onClick={() => sort(index, "Down")}
        disabled={index === list.length - 1 ? true : false}>
        Down
      </Button>
    </>
  );
};
ButtonList.defaultProps = {
  sort: () => {},
  list: [],
  index: null,
};

ButtonList.propTypes = {
  sort: PropTypes.func,
  list: PropTypes.array,
  index: PropTypes.number,
};
export default ButtonList;
