// src/Features/Home/home.js
import React from 'react';
import lineup from '../Assets/lineup.png';


const Home = () => {
  return (
    <div>
      <h1>Dearborn Salvage Auto</h1>
      <p>Quality Cars that Dont Break your Bank!</p>
      <p>Salvage and Clean Titles</p>
      <img src = {lineup} alt = "background cars" />
    </div>
  );
};

export default Home;