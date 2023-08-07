import React from "react";
import classes from "./Article.module.scss";
import AvatarImg from "../../images/avatar-michelle.jpg";
import IconShare from "../../images/icon-share.svg";
import ShareButton from "../Buttons/ShareButton";

const Article = () => {
  return (
    <div className={classes.article}>
      <h2 className={classes.article__heading}>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h2>
      <p className={classes.article__text}>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className={classes.article__group}>
        <div className={classes.article__subgroup}>
          <img src={AvatarImg} alt="Avatar" className={classes.article__img} />
          <div className={classes.article__column}>
            <h5>Michelle Appleton</h5>
            <p> 28 Jun 2020</p>
          </div>
        </div>
        <ShareButton>
          <img src={IconShare} alt="Share Icon" />
        </ShareButton>
      </div>
    </div>
  );
};

export default Article;
