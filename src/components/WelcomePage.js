import React from "react";
import image from "../images/main_page_img.png";
import style from "../styles/Welcome.module.css";
// треба в css єкспортить шрифти

function Welcome(values) {
    return (
      <div className={style.page_wrapper}>
        <div className={style.image_wrapper}>
          <img src={image} alt="Logo" />
        </div>
        <div className={style.text_wrapper}>
          <h1 className={style.title}>Welcome</h1>
          <p className={style.sub_text}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed
            <br /> do eiusmod
          </p>
        </div>
        <div className={style.buttons_wrapper}>
          <button className={style.button_create}>Create Account</button>
          <button className={style.button_log}>Login</button>
        </div>
        <p className={style.bottom_text}>All Right Reserved @2021</p>
      </div>
    );
}

export default Welcome;