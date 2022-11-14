import React from "react";
import classes from './nav.module.css'
import { RiServiceLine } from 'react-icons/ri'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'


import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
function Nav() {
    return (
        <div className={classes.nav}>
            <a href="#"><AiOutlineHome /> </a>
            <a href="#about"><AiOutlineUser /> </a>
            <a href="#experience"><BiBook /> </a>
            <a href="#service"><RiServiceLine /> </a>
            <a href="#contact"><BiMessageSquareDetail /> </a>
        </div>
    )
}

export default Nav;