import React from "react";
import {GrLinkedinOption} from 'react-icons/gr'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {SiGithub} from 'react-icons/si'
import classes from './Header.module.css'

function HeaderSocials(){

    return(
        <div className={classes.header_socials}>
  
                  <a href="https://linkedin.com" target={'_blank'}> <GrLinkedinOption/> </a>
                  <a href="https://gitlab.com" target={'_blank'}> <SiGithub /> </a>
                  <a href="https://facbook.com" target={'_blank'}> <BsFacebook/> </a>
                  <a href="https://instagram.com" target={'_blank'}> <BsInstagram/></a>

        </div>
    )
}

export default HeaderSocials;