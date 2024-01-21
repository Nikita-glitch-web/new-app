import React from "react";
import style from "../styles/Successful.module.css";
import image from "../images/Close.png";

function Successful() {
    return (
      <div className={style.successful_wrapper}>
        <div className={style.close_btn_box}>
          <button className={style.close_btn}>
            <img src={image} alt="Img" />
          </button>
        </div>
        <div className={style.success_text_box}>
          <h1 className={style.success_title}>
            Thank you for
            <br/> registration!
          </h1>
          <p className={style.success_title}>please verify your<br/> email</p>
        </div>
      </div>
    );
}

export default Successful;