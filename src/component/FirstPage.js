import React from "react";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import '../scss/main.scss';
const FirstPage = () => {

  return (

    // <div>
    //   <h1>First Page</h1>
    // </div>
    <div className="container">
      <div className="firstPageContainer">
      <h1 hidden>First Page</h1>
        <div className="leftContainer">
          <img src="Assets/Left-bg.png" alt="set" className="leftimg"></img>
        </div>
        <div className="rightContainer">
          <img src="Assets/Bg.jpg" alt="set" className="rightimg"></img>
          <div className="rightmainContainer">
            <div className="logo">
              <img src="Assets/Oreo.png" alt="set"></img>
            </div>
            <div className="collection">
              <img src="Assets/Doodle-strip2.png" alt="set"></img>
            </div>
            <div className="lang">Select your Language</div>
            <div className="buttonclass">
              <Link to={"./english"}>
              <CustomButton text="English" color="#28a745" />
              </Link>
              <Link to={"./arabic"}>
              <CustomButton text="Arabic" color="#28a745" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
