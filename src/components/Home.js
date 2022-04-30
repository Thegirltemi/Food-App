import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import {Button} from "@mui/material"

function Home() {
  return (
    <div className="home">
      
      <h1 className=" mt-10 text-3xl font-Send text-white  sm:text-5xl md:text-6xl"> Fast Food</h1>
      <p className="text-xl align-center font-Send pt-5 pb-8 sm:text-3xl md:text-5xl text-white"> Restaurant</p>
      <p className="text-xl"> Order your fovorite food in a click</p>
      <Link to="/Menu">
      <Button variant="contained"> Order Now</Button>
      </Link>
      
    </div>
  );
}

export default Home;
 