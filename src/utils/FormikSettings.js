import { useEffect, useRef } from "react";

const Effect = ({ formik, onChange }) => {
  const ref = useRef(null);
  useEffect(() => {
    onChange(formik, ref.current);
    ref.current = formik;
  }, [formik, onChange]);
  return null;
};

export default Effect;

// UseEffect хук React, который позволяет вам синхронизировать компонент с внешней системой.

// UseRef хук React, позволяющий ссылаться на значение, которое не нужно для рендеринга.

 //  const handleSubmit = (event, props) => {
  //    event.preventDefault();
  //    props.requestForLogin();
  //    console.log("Login screen log");
  //  };
  // const formik = useFormik({
  //   initialValues: {
  //       email: "",
  //       password: ""
  // },
  // validate,
  //   validateOnChange: false, // this one
  //   validateOnBlur: false, // and this one
  //   onSubmit: (values, props) => {
  //     const handleSubmit = (event, props) => {
  //         event.preventDefault();
  //         props.requestForLogin();
  //         console.log("Login screen log");
  //     };
  //     handleSubmit();
  //   },
  // });
 