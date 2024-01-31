import React from "react";
import { Formik } from "formik";
import style from '../styles/Register.module.css';
import image from '../images/Close.png';
import validate from "../utils/LoginPageValidation";

const Register = ({ doWhatYouWantOnSubmit }) =>  {
   return (
     <Formik
       initialValues={{ email: "", course: "", password: "" }}
       onSubmit={(values, actions) => {
          fetch("https://localhost:3000/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
            })
            .then((response) => response.text())
            .then(() => {
              doWhatYouWantOnSubmit();
              console.log(values)
            })
            .catch((error) => console.error(error))
          setTimeout(() => {
           actions.setSubmitting(false);
           doWhatYouWantOnSubmit();
         }, validate, 1000);
       }}
     >
       {(props) => {
         console.log(props);
         return (
           <form
             onSubmit={props.handleSubmit}
             className={style.form}
             style={{ fontFamily: "Inter" }}
           >
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
                   id="number"
                   type="number"
                   className={style.input_password}
                   placeholder="course"
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
               <div className={style.inputs_wrapper}>
                 <input
                   id="confirme_password"
                   type="password"
                   className={style.input_password}
                   placeholder="confirm password"
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

             <div className={style.login_box}>
               <button type="submit" className={style.login_btn}>
                 Register
               </button>
             </div>
             <p className={style.bottom_text}>
               Already have account?{" "}
               <a href="/" className={style.link}>
                 Login
               </a>
             </p>
           </form>
         );
       }}
     </Formik>
   );
}

export default Register;