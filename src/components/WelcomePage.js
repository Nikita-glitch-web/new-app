import React, { useState } from "react";
import image from "../images/main_page_img.png";
import style from "../styles/Welcome.module.css";
import Login from "./LoginScreen";
// import Register from "./RegisterPage";
// import Login from "./LoginPage";
// треба в css єкспортить шрифти

function Welcome(props) {
  const [veiewMode, setViewMode] = useState('welcome', 'login', 'register');// 'welcome | login | success | register | loading

  function handleBtn() {
    console.log(true);
    setViewMode('login');
  }
  // const myButton = document.getElementById("btn");
  // myButton.onclick = function() {

  // };

  // if (isHandle) {
  //   return <Login />;
  // }

  const WelcomeScreenContent = () => {
    return (
      <>
        <div className={style.text_wrapper}>
          <h1 className={style.title}>Welcome</h1>
          <p className={style.sub_text}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed
            <br /> do eiusmod
          </p>
        </div>
        <div className={style.buttons_wrapper}>
          <button onClick={handleBtn} className={style.button_create}>
            Create Account
          </button>
          <button onClick={handleBtn} className={style.button_log}>
            Login
          </button>
        </div>
        <p className={style.bottom_text}>All Right Reserved @2021</p>
      </>
    );
  };

  

  const Content = () => {
    if (veiewMode === 'login') {
      return <Login />
    }

    if (veiewMode === 'register') {
      return <h1>DICK</h1>
    }

    return <WelcomeScreenContent />;
  };

  return (
    <div className={style.page_wrapper}>
      <div className={style.image_wrapper}>
        <img src={image} alt="Logo" />
      </div>
      <Content />
    </div>
  );
}

export default Welcome;
