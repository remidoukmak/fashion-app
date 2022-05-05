import React from "react";
// import Home from "./Home.css";

const headerImage = new URL(import.meta.url);

export const Home = () => {
  return (
    <div class="carousel">
      <img class="carousel-image" src={headerImage} />
      <div class="carousel-cell">text here</div>
    </div>
  );
};
