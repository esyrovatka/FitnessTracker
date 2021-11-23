import React from "react";
import PropTypes from "prop-types";
import { Modal, Box, Typography } from "@mui/material";
const ModalComponent = ({ openModal, name }) => {
  const style = {
    position: "absolute",
    top: "15%",
    left: "52%",
    width: "auto",
    bgcolor: "white",
    color: "green",
    border: "2px solid #f4f4f4",
    textAlign: "center",
    boxShadow: 24,
    p: 2,
  };

  return (
    <Modal
      open={openModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
      </Box>
    </Modal>
  );
};

ModalComponent.defaultProps = {
  openModal: false,
  name: "",
};

ModalComponent.propTypes = {
  openModal: PropTypes.bool,
  name: PropTypes.string,
};

export default ModalComponent;
