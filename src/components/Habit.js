import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({ habit }) => {
  // Get today's date and day
  const today = new Date();
  const todayDay = today.getDay();
  
  // Loop for counting habit done
  let countDone = 0;
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  // Use navigate hook from react-router-dom and dispatch hook
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function called after clicking the delete button on the habit list
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    alert("Your habit is deleted successfully");
  };

  // Function called after clicking the Week View button
  // Sets the current habit id to local storage and navigates to the Week View page
  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  };

  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay + 1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week"></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
