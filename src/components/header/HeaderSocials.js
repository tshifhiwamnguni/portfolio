import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

import classes from './Header.module.css'


function HeaderSocials(){
    return(
        <div className={classes.header_socials}>
            <a href='https://linkedin.com' target={'_blank'} rel="noReferrer"> <BsLinkedin/></a>
            <a href='https://github.com'  target={'_blank'} rel="noReferrer"> <FaGithub/></a>
            <a href='https://instgram.com'  target={'_blank'} rel="noReferrer"> <FaGithub/></a>
        </div>
    )
}

export default  HeaderSocials;