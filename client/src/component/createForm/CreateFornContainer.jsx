import React from "react";
import { useState } from "react";
import CreateForm from "./CreateForm";
import { useDispatch } from "react-redux";
import { createNewExercise } from "../../redux/action";
import ModalComponent from "../ModalComponent";
const CreateFormContainer = ({ name, type }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    type: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const val = event.target.value;
    setForm({ ...form, [name]: val });
  };

  const submitFunc = (event) => {
    event.preventDefault();
    dispatch(createNewExercise(form));
    setForm({ ...form, name: "", type: "" });
    console.log(form);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
    <>
      <ModalComponent openModal={open} name="Exercise Create!" />
      <CreateForm
        handleChange={handleChange}
        form={form}
        name={name}
        type={type}
        submitFunc={submitFunc}
      />
    </>
  );
};

export default CreateFormContainer;
