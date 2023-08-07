import React, { useState } from "react";
import classes from "./ShareButton.module.scss";
import IconFacebook from "../../images/icon-facebook.svg";
import IconTwitter from "../../images/icon-twitter.svg";
import IconPinterest from "../../images/icon-pinterest.svg";
import useMediaQuery from "../../hooks/useMediaQuery";

const ShareButton = (props) => {
  const media = useMediaQuery("only screen and (max-width:850px)");
  const [active, setActive] = useState(false);
  const sharePopupHandler = () => {
    setActive((prevState) => !prevState);
  };
  return (
    <div className={classes.share}>
      {active ? (
        <div className={classes.share__group}>
          <div className={classes.share__subgroup}>
          <p>share</p>
          <a href="https://www.facebook.com/" >
            <img src={IconFacebook} alt="" className={classes.share__group__button}/>
          </a>
          <a href="https://www.twitter.com/" >
            <img src={IconTwitter} alt="" className={classes.share__group__button}/>
          </a>
          <a
            href="https://www.pinterest.com/"
            
          >
            <img src={IconPinterest} alt="" className={classes.share__group__button}/>
          </a>
          </div>
          {media && (
            <button className={`${classes.button} ${classes.active}`} onClick={sharePopupHandler}>
              {props.children}
            </button>
          )}
        </div>
      ) : (
        <div></div>
      )}
      <button className={classes.button} onClick={sharePopupHandler}>
        {props.children}
      </button>
    </div>
  );
};

export default ShareButton;
