import React from "react";
// import { useFormik } from "formik";
import { Formik } from "formik";
import image from "../images/Vector.svg";
import style from "../styles/Login.module.css";
import validate from "../utils/LoginPageValidation";
// import * as Yup from "yup";
// import validate from "../utils/LoginPageValidation";

// const validationSchema = Yup.object({
//   name: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
// });

// import Effect from "../utils/FormikSettings";

// function MyComponent(props) {
//   return (
//     <div>
//       <button onClick={props.callback}>Нажми меня</button>
//     </div>
//   );
// }

// function LoginLogic(props) {
//   const handleClick = () => {
//     props.callback();
//   };
// }

const LoginScreen = ({ doWhatYouWantOnSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        fetch("https://localhost:3000/submit-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values)
          .then(response => response.text())
          .then(() => {
            doWhatYouWantOnSubmit();
          })
          .catch(error => console.error(error))
        });
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, validate, 1000);
      }}
    >
      {(props) => {
        console.log(props);
        return (
          <form
            onSubmit={props.handleSubmit}
            style={{ fontFamily: "Inter" }}
            className={style.form}
          >
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
                      id="email"
                      type="email"
                      className={style.input}
                      placeholder="info@example.com"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name}
                    />
                    {props.errors.email ? (
                      <div>
                        <h1 className={style.validation_text}>
                          {props.errors.email}
                        </h1>
                      </div>
                    ) : null}
                  </p>
                </fieldset>
              </div>
              <div className={style.inputs_wrapper}>
                <input
                  id="password"
                  type="password"
                  className={style.input_password}
                  placeholder="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                />
                {props.errors.password ? (
                  <div>
                    <h1 className={style.validation_text}>
                      {props.errors.password}
                    </h1>
                  </div>
                ) : null}
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
              <button type="submit" className={style.login_btn}>
                Login
              </button>
            </div>
            <p className={style.bottom_text}>
              Dont have an account?{" "}
              <a href="/" className={style.link}>
                Register
              </a>
            </p>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginScreen;
