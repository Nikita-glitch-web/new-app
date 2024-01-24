import React from "react";
import style from '../styles/Register.module.css';
import image from '../images/Close.png';

const Register = (props) => {
    const handleSubmit = (event) => {
       event.preventDefault();
       props.requestForRegister();
       console.log("Iam gay");
    };
    return (
      <form onSubmit={handleSubmit} className={style.form} style={{ fontFamily: "Inter" }}>
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
              type="number"
              className={style.input_password}
              placeholder="course"
            ></input>
          </div>
          <div className={style.inputs_wrapper}>
            <input
              type="password"
              className={style.input_password}
              placeholder="password"
            ></input>
          </div>
          <div className={style.inputs_wrapper}>
            <input
              type="password"
              className={style.input_password}
              placeholder="confirm password"
            ></input>
          </div>
        </div>

        <div className={style.login_box}>
          <button className={style.login_btn}>Register</button>
        </div>
        <p className={style.bottom_text}>
          Already have account?{" "}
          <a href="/" className={style.link}>
            Login
          </a>
        </p>
      </form>
    );
}

export default Register