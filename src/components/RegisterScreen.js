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
        <div className={style.inputs_box}>
          <div className={style.inputs_wrapper}>
            <fieldset className={style.fieldset}>
              <legend className={style.legend}>username/email</legend>
              <p>
                <input
                  type="text"
                  className={style.input}
                  placeholder="info@example.com"
                ></input>
              </p>
            </fieldset>
          </div>
          <div className={style.inputs_wrapper}>
            <input
              type="text"
              className={style.input_password}
              placeholder="password"
            ></input>
          </div>
        </div>
      </form>
    );
}

export default Register