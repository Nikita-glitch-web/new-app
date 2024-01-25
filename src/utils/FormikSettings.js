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