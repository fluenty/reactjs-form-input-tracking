import React, { useState } from "react";
import "./Input.css";
import { handlePageView } from "../../utils/handlePageView";

export const Input = ({ inputName, label }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = (e) => {
    handlePageView(e);
  };

  return (
    <>
      <label>{label}</label>
      <input
        type="text"
        name={inputName}
        placeholder={"Type something"}
        className="input"
        onChange={handleChange}
        onBlur={handleBlur}
        value={inputValue}
      />
    </>
  );
};
export default Input;
