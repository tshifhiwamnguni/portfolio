import React from "react";
import cv from './../../assets/cv.pdf'
import me from './../../assets/me.png'
import HeaderSocials from './../header/headerSocials'
import classes from './Header.module.css'

function Header(){
    return(
        <header>
            <div className={`${classes.container} ${classes.header__container}`}>
                <h5>Hello I'm</h5>
                <h1>Brandon Mnguni</h1>
            
                <h5 className={classes.text_light}>Fullstack developer</h5> 
                   <br/>
                <Buttons/>
                <br/>
                <HeaderSocials/>
                <div className={classes.me}>
                    <img src={me} alt="me" ></img>
                </div>
                 <a href="#contact" className={classes.scroll_down} >scroll down</a>
            </div>

        </header>
    )
}


function Buttons(){
    return(
        <div className={classes.cta}>
         <a href={cv} download className="btnx"> download</a>
         <a href="#contacts" className="btnx btn-primaryx"> contact me</a>
        </div>
    )
}
export default Header;