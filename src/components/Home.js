import React from 'react';
import Habits from './Habits';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      {/* Navbar component with a prop 'name' set to "Detail View" */}
      <Navbar name="Detail View" />
      
      {/* Habits component to display habit information */}
      <Habits />
    </>
  );
};

export default Home;
