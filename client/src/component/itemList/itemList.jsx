import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delExercise } from "../../redux/action";
import EditExerciseField from "./editExerciseField";
import ModalComponent from "../ModalComponent";

const ItemList = ({ list }) => {
  const dispatch = useDispatch();
  const [updateList, setUpdateList] = useState(list);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setUpdateList(list);
  }, [list]);

  const update = (item) => {
    const newArray = [...updateList];
    const result = newArray.find((elem) => elem._id === item.id);
    result.name !== item.name &&
      (result.name = item.name) &&
      setUpdateList(newArray);

    result.type !== item.type &&
      (result.type = item.type) &&
      setUpdateList(newArray);
  };

  const deleteExercise = (id) => {
    console.log("deleteExercise", id);
    dispatch(delExercise(id));
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  const sortUp = (index) => {
    const newArr = [...updateList];
    [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]];
    setUpdateList(newArr);
  };

  const sortDown = (index) => {
    const newArr = [...updateList];
    [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]];
    setUpdateList(newArr);
  };

  useEffect(() => {
    setUpdateList(list);
  }, [list]);

  return updateList.map((item, index) => (
    <div key={item._id}>
      <ModalComponent openModal={open} name="Exercise Delete!" />
      <EditExerciseField
        name={item.name}
        type={item.type}
        id={item._id}
        delFunc={deleteExercise}
        changeFunc={update}
        index={index}
        sortUp={sortUp}
        sortDown={sortDown}
        lastElem={list.length - 1}
      />
    </div>
  ));
};

export default ItemList;
