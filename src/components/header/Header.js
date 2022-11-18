import React from "react";
import cv from './../../assets/cv.pdf'
import classes from './Header.module.css'
import HeaderSocials from './HeaderSocials'
import MyImage from './../../assets/me.png'


function Header(){
    return(
        <header>
            <div className={`${classes.container} ${classes.header__container}`}>
                <h5>Hello I'm</h5>
                <h1>Tshifhiwa Brandon Mnguni</h1>
            
                <h5 className='text_light'>Fullstack developer</h5> 
                   <br/>
                <Buttons/>
                <br/>
                <HeaderSocials/>
                <div className={classes.me}>
                    <img src={MyImage} alt='me'></img>
                </div>  
                <a href='#contact' className={classes.scroll_down} > scroll down</a>
            </div>
        </header>
    )
}


function Buttons(){
    return(
        <div className={classes.cta}>
         <a href={cv} download="brandon" className='btnx'> download</a>
         <a href="#contacts" className='btnx btn_primaryx'> contact me</a>
        </div>
    )
}
export default Header;