import React from "react";
import classes from "./portfolio.module.css";
import MyImage from './../../assets/portfolio1.jpg'
function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className={`${classes.container} ${classes.services_container}`}>
        <article className={classes.portfolio_item}>
          <div className={classes.portfolio_item_image}>
            <img src={MyImage} alt='d'/>
          </div>
          <h3> this is a portfolio item title</h3>
          <br/>
          <div className={classes.portfolio_item_buttons}>
          <a href='https://github.com/tshifhiwamnguni' className='btnx' target={'_blank'}> github</a>
          <a href='https://9anime.to/' className='btnx btn-primaryx' target={'_blank'}> live demo</a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
