import React from "react";

import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'
import classes from './nav.module.css'
 


function Nav(){
    const [activeNav, setActiveNav] = useState('#');
    return(
       <nav>
            <a href='#' onClick={()=>{ setActiveNav('#')}} className={activeNav !== '#' ? 'active':classes.active}><AiOutlineHome/> </a>
            <a href='#about' onClick={()=>{ setActiveNav('#about')}} className={activeNav !== '#about' ? 'active':classes.active}> <AiOutlineUser/> </a>
            <a href='#experience'onClick={()=>{ setActiveNav('#experience')}} className={activeNav !== '#experience' ? 'active':classes.active}><BiBook/> </a>
            <a href='#service' onClick={()=>{ setActiveNav('#service')}} className={activeNav !== '#service' ? 'active':classes.active}> <RiServiceLine/></a>
            <a href='#contact' onClick={()=>{ setActiveNav('#contact')}} className={activeNav !== '#contact' ? 'active':classes.active}> <BiMessageSquareDetail/> </a>
       </nav>
    )
}

export default Nav;