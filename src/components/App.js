import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import WeekView from "./WeekView";

// Functional component representing the main App
const App = () => {
  // Render the component
  return (
    <>
      {/* Define route configurations using React Router */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for the week view page */}
        <Route path="/week-view" element={<WeekView />} />
      </Routes>
    </>
  );
};

// Export the App component as the default export
export default App;
