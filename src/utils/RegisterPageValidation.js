//import style  from "./validationStyle.module.css";

const validate = (values) => {
  //const validationStyle = validate.style;
  const errors = {};
  //const validateStyle = style;
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.course) {
    errors.course = "Required";
  } else if (values.course.length < 1) {
    errors.phone = "write your course";
  }
  console.log(errors);

  if (!values.password) {
    errors.password = "Required";
  } else if (values.phone.length < 8) {
    errors.phone = "wrong password";
  }
  console.log(errors);

  //validate.classList.add("validation-text");

  return errors;
};

export default validate;
