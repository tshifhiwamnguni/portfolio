import React from "react";
import cv from "./../../assets/cv.pdf";
import classes from "./Header.module.css";

import MyImage from "../../assets/me-about.jpg";

function Header() {
  return (
    <header className={`${classes.container} ${classes.header__container}`}>
   

      <div className={`${classes.container} ${classes.about_container}`}>
        <div>
          <div className={classes.me}>
            <img src={MyImage} alt="me" className={classes.pic}></img>
          </div>
        </div>

        <div>
          <div className={classes.intro}>
            <h2>Hello I'm</h2>
            <h1>Tshifhiwa Brandon Mnguni</h1>

            <h2>Fullstack developer</h2>
            <br />
            <Buttons />
            <p>
            “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” - Martin Fowler
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function Buttons() {
  return (
    <div className={classes.cta}>
      <a href={cv} download="Tshifhiwa Mnguni CV" className="btnx btn_primaryx">
        {" "}
        download
      </a>
      <a href="#contact" className="btnx btn_primaryx">
        {" "}
        contact me
      </a>
    </div>
  );
}
export default Header;
