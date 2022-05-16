import React, { useState, useEffect } from "react";
import "./Carousel2.css";
import { ArrowBack } from "@material-ui/icons";
import { ArrowForward } from "@material-ui/icons";

export const Carousel2 = () => {
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
          style={{
            backgroundImage: `url("https://interview-assessment.api.avamae.co.uk/Images/swiper_image_3.jpg")`,
          }}
        >
          <div
            className="left"
            onClick={() => {
              setCurrImg(
                (data.Details.length + currImg - 1) % data.Details.length
              );
            }}
          >
            <ArrowBack />
          </div>
          <div className="center">
            <div className="inner-center2">
              <div className="box-two-title">
                <h4>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                </h4>
              </div>
              <div className="box-two-text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum
                </p>
              </div>
              <div>
                <button className="button-carousel2">Log in</button>
              </div>
            </div>
          </div>
          <div
            className="right"
            onClick={() => {
              setCurrImg((currImg + 1) % data.Details.length);
            }}
          >
            <ArrowForward />
          </div>
        </div>
      </div>
    );
  }
};
