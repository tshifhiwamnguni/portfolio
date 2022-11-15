import React from "react";
import classes from './experience.module.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience(){
    return(
        <section id='experience'>
          <h5>what skills do i have?</h5>
          <h2>My experience</h2>
          <div className={`${classes.container} ${classes.experience_container}`}>
                <div className={classes.frontend}>
                    <h3> frontend development</h3>
                    <div className={classes.experience_content}>
                        <article>
                            
                            <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            
                            <h4 >HTML</h4>
                         
                            </div> 
                              <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >angular</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >React</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >CSS</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >javascript</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >Typescript</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>

                    </div>
                </div>

                <div className={classes.backend}>
                <h3> backend development</h3>
                <div className={classes.experience_content}>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >PHP</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >NODE.js</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >MYSQL</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >javascript</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >MongoDB</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>
                        <article>
                        <div className={classes.experience_details}>
                            <BsPatchCheckFill className={classes.experience_icon}/>
                            <h4 >Postman</h4>
                            </div>
                            <small className='text-light'>Experienced</small>
                        </article>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;