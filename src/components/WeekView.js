import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const WeekView = () => {
  // Use the useSelector hook to get state from the reducer
  const habitsState = useSelector((state) => state.habits);

  // Get the habit from habits state according to the local storage id
  const habit = habitsState.find((h) => h.id === Number(localStorage.getItem("id"))) || {};

  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{ textTransform: "capitalize" }}>
        {habit.name}
      </h1>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <DayView day={day} key={index} />
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          <Link to="/">Back to Detail View</Link>
        </button>
      </div>
    </>
  );
};

export default WeekView;
