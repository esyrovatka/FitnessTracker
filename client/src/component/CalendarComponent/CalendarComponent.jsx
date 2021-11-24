import * as React from "react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import PickersDay from "@mui/lab/PickersDay";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Badge, TextField } from "@mui/material/";
import { useDispatch } from "react-redux";
import { getCurrData } from "../../redux/action";

const CalendarComponent = ({ workoutData }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    dispatch(getCurrData(new Date()));
  }, [dispatch]);

  const changeData = () => (newValue) => {
    setValue(newValue);
    dispatch(getCurrData(newValue));
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        renderInput={(params) => <TextField {...params} />}
        value={value}
        onChange={changeData(value)}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelect =
            workoutData &&
            !DayComponentProps.outsideCurrentMonth &&
            workoutData.find(
              (item) =>
                item.getDate() === day.getDate() &&
                item.getMonth() === day.getMonth()
            );

          return (
            <Badge
              key={String(day)}
              overlap="circular"
              badgeContent={isSelect ? "🌚" : undefined}>
              <PickersDay {...DayComponentProps} />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

CalendarComponent.defaultProps = {
  workoutData: [],
};

CalendarComponent.propTypes = {
  workoutData: PropTypes.array,
};
export default CalendarComponent;
