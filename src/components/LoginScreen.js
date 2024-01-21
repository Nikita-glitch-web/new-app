import React from "react";
// import { useFormik } from "formik";
import image from "../images/Close.png";
import style from "../styles/Login.module.css"

function Login() {
    return (
      <form className={style.form}>
        <div className={style.form_header}>
          <div className={style.form_title_box}>
            <p className={style.sub_title}>Welcome Back!!!</p>
            <h1 className={style.title}>Login</h1>
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
        <div className={style.row_with_checkbox}>
          <div className={style.checkbox_wrapper}>
            <input className={style.checkbox} type="checkbox"></input>
            <p className={style.checkbox_text}>Remember me</p>
          </div>
          <div className={style.button_wrapper}>
            <button className={style.button}>Forgot Password?</button>
          </div>
        </div>
        <div className={style.login_box}>
          <button className={style.login_btn}>Login</button>
        </div>
        <p className={style.bottom_text}>
          Dont have an account? <a href="/" className={style.link}>Register</a>
        </p>
      </form>
    );
}

export default Login;