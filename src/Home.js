import React from "react";
import "./Home.css";
import { Carousel1 } from "./Components/Carousel1";
import { Carousel2 } from "./Components/Carousel2";
import { Box1 } from "./Components/Box1";
import { Box2 } from "./Components/Box2";

export const Home = () => {
  return (
    <div className="Home-div">
      <Carousel1 />

      <Box1 />

      <Carousel2 />
      <Box2 />
    </div>
  );
};