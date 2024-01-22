import React from "react";
import style from '../styles/Register.module.css';
import image from '../images/Close.png';

function Register() {
    return (
      <form>
        <div className={style.form_header}>
          <div className={style.form_title_box}>
            <p className={style.sub_title}>Hello...</p>
            <h1 className={style.title}>Register</h1>
          </div>
          <div className={style.close_btn_box}>
            <button className={style.close_btn}>
              <img src={image} alt="Img" />
            </button>
          </div>
        </div>
      </form>
    );
}

export default Register