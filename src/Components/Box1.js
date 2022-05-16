import React from "react";
import "./Box1.css";

export const Box1 = () => {
  return (
    <div>
      <div id="float-container">
        <div className="float-container-content">
          <p className="box-one">
            Why do we use it? It is a long established fact that a reader will
            be distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like).
          </p>
          <button className="box-one-button-title">Learn more</button>
        </div>
        <div className="float-container-content">
          {" "}
          <img
            id="carousel-img"
            src="https://interview-assessment.api.avamae.co.uk/Images/swiper_image_2.jpg"
          />
        </div>
      </div>
    </div>
  );
};
