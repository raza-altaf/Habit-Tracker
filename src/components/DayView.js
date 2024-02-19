import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

// Functional component representing the view for a single day
const DayView = ({ day }) => {
  // Get today's date
  const today = new Date();
  
  // Get the day from today's date
  const todayDay = today.getDay();

  // Use the useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Get date details from the provided date
  const date = new Date(day.yyyy, day.mm, day.dd);

  // Function called after clicking the done icon
  const markToDone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your status for future days");
      return;
    }
    // Dispatch the habitDone action from the reducer
    dispatch(habitDone(day.id));
  };

  // Function called after clicking the undone icon
  const markToUnDone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your status for future days");
      return;
    }
    // Dispatch the habitUnDone action from the reducer
    dispatch(habitUnDone(day.id));
  };

  // Function called after clicking the none icon
  const markToNone = () => {
    if (day.id > todayDay) {
      alert("You cannot change your status for future days");
      return;
    }
    // Dispatch the habitNone action from the reducer
    dispatch(habitNone(day.id));
  };

  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
      {/* Icons for marking habits */}
      <i
        className={`fa-solid fa-circle-check circle-icon ${day.isDone ? "active" : ""}`}
        onClick={markToDone}
      ></i>
      <i
        className={`fa-solid fa-circle-xmark circle-icon ${!day.isDone ? "active" : ""}`}
        onClick={markToUnDone}
      ></i>
      <i
        className={`fa-solid fa-circle-minus circle-icon ${day.isDone === "" ? "active" : ""}`}
        onClick={markToNone}
      ></i>
    </div>
  );
};

export default DayView;
