import React, { useState, useEffect } from "react";
import "./Carousel.css";
// import { ArrowBackIosIcon } from '@material-ui/icons/ArrowBackIos';
import { ArrowBack } from "@material-ui/icons";
import { ArrowForward } from "@material-ui/icons";
// import axios from 'axios';
// import { ArrowForwardIosIcon } from '@material-ui/icons/ArrowForwardIos';
export const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details",
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((Obj) => {
        setData(Obj);
      });
  }, []);
  if (!!data) {
    return (
      <div className="carousel">
        <div
          className="carouselInner"
          style={{ backgroundImage: `url(${data.Details[currImg].ImageUrl})` }}
        >
          <div
            className="left"
            onClick={() => {
              setCurrImg(
                (data.Details.length + currImg - 1) % data.Details.length
              );
            }}
          >
            <ArrowBack style={{ frontSize: 30 }} />
          </div>
          <div className="center">
            <div className="inner-center">
              <div className="box-one">
                {/* {data.Details[currImg].Subtitle} */}
                <div className="box-one-title">
                  <h2>Lorem ipsum dolor</h2>
                </div>
                <br></br>
                <div className="box-one-subtitle">
                  <h4>At vero eos et accusamus et iusto odio</h4>
                </div>
              </div>
              <br></br>
              <button className="button-title">
                {/* {data.Details[currImg].Title} */}
                Contact us
              </button>
            </div>
          </div>
          <div
            className="right"
            onClick={() => {
              setCurrImg((currImg + 1) % data.Details.length);
            }}
          >
            <ArrowForward style={{ frontSize: 30 }} />
          </div>
        </div>
      </div>
    );
  }
};
