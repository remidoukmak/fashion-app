import React, { useState, useEffect } from "react";
import "./Carousel2.css";
// import { ArrowBackIosIcon } from '@material-ui/icons/ArrowBackIos';
import { ArrowBack } from "@material-ui/icons";
import { ArrowForward } from "@material-ui/icons";
// import axios from 'axios';
// import { ArrowForwardIosIcon } from '@material-ui/icons/ArrowForwardIos';
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
        // console.log(Obj.Details[currImg][2].ImageUrl);
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
            <ArrowBack style={{ frontSize: 30 }} />
          </div>
          <div className="center">
            <div className="inner-center">
              <div className="box-three-title">
              <h4>
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
              </h4>

              {/* <span className="box-text">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
              </span> */}
</div>
              <div className="box-three-text">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum
                </p>
                {/* {data.Details[currImg].Subtitle} */}
              </div>

              <button className="button-title">
                {/* {data.Details[currImg].Title} */}
                Log in
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
