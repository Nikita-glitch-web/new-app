import React, { useState } from "react";
import image from "../images/main_page_img.png";
import style from "../styles/Welcome.module.css";
import Successful from "./SuccessfulScreen";
import LoginScreen from "./LoginScreen";
import Register from "./RegisterScreen";
// import Register from "./RegisterPage";
// import Login from "./LoginPage";
// треба в css єкспортить шрифти

function Welcome(props) {
  const [veiewMode, setViewMode] = useState(
    "welcome",
    "login",
    "register",
    "success"
  ); // 'welcome | login | success | register | loading

  function handleRegisterBtn() {
    console.log(true);
    setViewMode("register");
  }

  function handleLoginBtn() {
    console.log(true);
    setViewMode("login");
    console.log(veiewMode);
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
        <div style={{ fontFamily: "Inter" }} className={style.text_wrapper}>
          <h1 className={style.title}>Welcome</h1>
          <p className={style.sub_text}>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed
            <br /> do eiusmod
          </p>
        </div>
        <div className={style.buttons_wrapper}>
          <button onClick={handleRegisterBtn} className={style.button_create}>
            Create Account
          </button>
          <button onClick={handleLoginBtn} className={style.button_log}>
            Login
          </button>
        </div>
        <p className={style.bottom_text}>All Right Reserved @2021</p>
      </>
    );
  };

  // SuccessfulSubmitRequest(event) {
  //   event.preventDefault()
  // }

  const successfullLoginRequest = (props) => {
    // ЦЕ КОЛЛ БЕК
    console.log("Callback function called!");
    setViewMode("success");
  };

  const successfullRegistRequest = (props) => {
    const requestForRegister = () => {
      // це callback
      console.log("Callback function called!");
      setViewMode("success");
    };
    requestForRegister(props);
  };

  const Content = () => {
    if (veiewMode === "login") {
      return <LoginScreen doWhatYouWantOnSubmit={successfullLoginRequest} />;
    }

    if (veiewMode === "register") {
      return <Register doWhatYouWantOnSubmit={successfullRegistRequest} />;
    }

    if (veiewMode === "success") {
      return <Successful />;
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

// function MyComponent(props) {
//   return (
//     <div>
//       <button onClick={props.callback}>Нажми меня</button>
//     </div>
//   );
// }
// Код, створений штучним інтелектом. Перевіряйте та використовуйте обережно. Додаткові відомості про запитання й відповіді.
// В этом примере компонент MyComponent принимает пропс callback, который является функцией. Мы передаем эту функцию в качестве обработчика события onClick кнопки.

// const ComponentB = (props) => {
//   setTimeout(() => {
//     props.doSomething();
//   }, 3000);
//   return <div className={props.additionalClassNames}>{props.title}</div>;
// };

// const ComponentA = () => {
//   const test = () => {
//     const callback = () => {
//       console.log("asdfasdfasdfasdf");
//     };
//   };
//   const text = "sadfasdfasdfasfd";
//   return (
//     <ComponentB
//       doSomething={test}
//       title={text}
//       additionalClassNames="asdfasdf asdfasdf"
//     />
//   );
// };
