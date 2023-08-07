import React from "react";
import classes from "./Card.module.scss";
import Drawers from "../../images/drawers.jpg";
import Article from "../Article/Article";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img src={Drawers} alt="Drawers" className={classes.card__img} />
      <Article />
    </div>
  );
};

export default Card;
