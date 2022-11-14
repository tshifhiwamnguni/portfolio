import React from "react";
import cv from './../../assets/cv.pdf'

function Header(){
    return(
        <header>
            <div className="container header__container">
                <h5>hello I'm</h5>
                <h1>Brandon Mnguni</h1>
            
                <h5 className="text-light">Fullstack developer</h5> 
                   <br/>
                <Buttons/>
                <div className="me">
                    <img ></img>
                </div>
            </div>

        </header>
    )
}


function Buttons(){
    return(
        <div className="cta">
         <a href={cv} download className="btnx"> download</a>
         <a href="#contacts" className="btnx btn-primaryx"> contact me</a>
        </div>
    )
}
export default Header;