import React from "react";
import "./Home.css";
import { Carousel } from "./Component/Carousel";
import { Carousel2 } from "./Component/Carousel2";

export const Home = () => {
  return (
    <div>
      <Carousel />
      <div id="section">
        <ul>
          <li>
            <p className="box-two">
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </li>
          <li>
            <a href="#">
              <img
                id="carousel-img"
                src="https://interview-assessment.api.avamae.co.uk/Images/swiper_image_2.jpg"
              />
            </a>
          </li>
        </ul>
      </div>

      <Carousel2 />
      <div id="section">
        <ul>
          <li>
            <h1 className="caption">Why do we use it?</h1>
            <p className="caption-text">
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </li>
          <li>
            <p>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </li>
          <li>
            <p>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable content of a page when looking at
              its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the like).
            </p>
          </li>
        </ul>
      </div>
    </div>

    // <div class="carousel">
    //   {/* <img class="carousel-image" src={headerImage} /> */}
    //   <div class="fill">
    //     <img src="https://picsum.photos/id/237/320/240" alt="" />
    //   </div>
    //   <div class="carousel-cell">text here</div>
    //   <div class="carousel-cell">text here</div>
    //   <div class="carousel-cell">text here</div>
    // </div>
  );
};

// import React from "react";
// import "./Home.css";
// import { Carousel } from "./Component/Carousel";
// import { Carousel2 } from "./Component/Carousel2";
// export const Home = () => {
//   return (
//     <div>
//       <Carousel />
//       <div id="section">
//         <ul>
//           <li>
//             <h1 className="caption">Why do we use it?</h1>
//             <p className="caption-text">
//               It is a long established fact that a reader will be distracted by
//               the readable content of a page when looking at its layout. The
//               point of using Lorem Ipsum is that it has a more-or-less normal
//               distribution of letters, as opposed to using 'Content here,
//               content here', making it look like readable English.
//             </p>
//             <ul className="caption-list-style">
//               <li className="caption-list">
//                 Hello Lorem Ipsum is that it has a more-or-less normal
//                 distribution of letters
//               </li>
//               <li className="caption-list">
//                 Many desktop publishing packages the readable content of a page
//                 when looking at its layout. The point of using Lorem
//               </li>
//               <li className="caption-list">
//                 web page editors now use of letters, as opposed to using
//                 'Content here, content here', making it look like readable
//               </li>
//               <li className="caption-list">
//                 Lorem Ipsum as opposed to using 'Content here, content here',
//                 making it look like readable English
//               </li>
//             </ul>
//             <div>
//               <br></br>
//               <button className="button-title">Learn more</button>
//             </div>
//           </li>
//           <li>
//             <br></br>
//             <a href="#">
//               <img
//                 id="carousel-img"
//                 src="https://interview-assessment.api.avamae.co.uk/Images/swiper_image_2.jpg"
//               />
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* <div className="carousel-static">
//         <div className="carousel-static-inner">
//           <div className="para">
//             This text is the content of the box. We have added a 50px padding,
//             20px margin and a 15px green border. Ut enim ad minim veniam, quis
//             nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
//             consequat. Duis aute irure dolor in reprehenderit in voluptate velit
//             esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
//             cupidatat non proident, sunt in culpa qui officia deserunt mollit
//             anim id est laborum.
//             <div>
//               <button className="button-title">Log in</button>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <Carousel2 />
//       <div id="section">
//         <br></br>
//         <div>
//           <h4 className="articles-title">
//             {" "}
//             {/* lorem ipsum' will uncover many web sites still in their infancy */}
//           </h4>
//           <h2 className="articles-subtitle">
//             {/* Many desktop publishing packages still in their infancy various
//             versions have evolved over the years */}
//           </h2>
//         </div>
//         {/* <ul>
//           <li> */}
//             <div>
//               <p className="articles-text">
//                 Why do we use it? It is a long established fact that a reader
//                 will be distracted by the readable content of a page when
//                 looking at its layout. The point of using Lorem Ipsum is that it
//                 has a more-or-less normal distribution of letters, as opposed to
//                 using 'Content here, content here', making it look like readable
//                 English. Many desktop publishing packages and web page editors
//                 now use Lorem Ipsum as their default model text, and a search
//                 for 'lorem ipsum' will uncover many web sites still in their
//                 infancy. Various versions have evolved over the years, sometimes
//                 by accident, sometimes on purpose (injected humour and the
//                 like).
//               </p>
//             {/* </li>
//             <li> */}
//               <p className="articles-text">
//                 Why do we use it? It is a long established fact that a reader
//                 will be distracted by the readable content of a page when
//                 looking at its layout. The point of using Lorem Ipsum is that it
//                 has a more-or-less normal distribution of letters, as opposed to
//                 using 'Content here, content here', making it look like readable
//                 English. Many desktop publishing packages and web page editors
//                 now use Lorem Ipsum as their default model text, and a search
//                 for 'lorem ipsum' will uncover many web sites still in their
//                 infancy. Various versions have evolved over the years, sometimes
//                 by accident, sometimes on purpose (injected humour and the
//                 like).
//               </p>
//             {/* </li>
//             <li> */}
//               <p className="articles-text">
//                 Why do we use it? It is a long established fact that a reader
//                 will be distracted by the readable content of a page when
//                 looking at its layout. The point of using Lorem Ipsum is that it
//                 has a more-or-less normal distribution of letters, as opposed to
//                 using 'Content here, content here', making it look like readable
//                 English. Many desktop publishing packages and web page editors
//                 now use Lorem Ipsum as their default model text, and a search
//                 for 'lorem ipsum' will uncover many web sites still in their
//                 infancy. Various versions have evolved over the years, sometimes
//                 by accident, sometimes on purpose (injected humour and the
//                 like).
//               </p>
//             {/* </li>
//           </ul> */}
//         </div>
//       </div>
//     </div>
//   );
// };
